<template lang="pug">
  div
    header
      div
        v-row(style="margin:25px;")
          p(class="font-weight-black" style="font-size: 2em; margin-right:10px;") Recipe list:
          v-btn(color="primary" fab small dark @click="this.$router.push('add-recipe')") +
    section 
      div(style="margin:25px;")
        b-table(:data="recipes" default-sort="priority")
          template(slot-scope="recipes")
            b-table-column(field="id" label="ID" width="40" sortable numeric) {{ recipes.row.id }}
            b-table-column(field="name" label="Name" sortable) {{ recipes.row.name }}
            b-table-column( field="source" label="Source" sortable)
              a(v-bind:href="recipes.row.source") {{ recipes.row.source }}
            b-table-column(field="ingretients_number" label="Number of ingredients" sortable) {{ recipes.row.ingretients_number }}
            b-table-column(field="ingredients" label="Ingredients" sortable) {{ showInstructions(recipes.row.ingredients,recipes.row.ingretients_number) }}
            b-table-column(field="prep_instructions" label="Preparation instructions" sortable) {{ showPreparationInstructions(recipes.row.prep_instructions) }}
            b-table-column(field="prep_time" label="Preparation time" sortable) {{ showPreparationTime(recipes.row.prep_time) }}
            b-table-column(label="View")
              v-btn(color="primary"  @click="navigateTo({name: 'details', query: {id: recipes.row.id} })") View 
            b-table-column(label="Delete")
              v-btn(color="error" @click.native="confirmDeleteDialogClicked(recipes.row.id, recipes.row.name)" ) Delete
        v-dialog(v-model="confirmDeleteDialog"  max-width="550")
          v-card
            v-card-title Are you sure you want to delete recipe with name: {{ deleteRecipeName }} ?
            v-card-text By confirming this action this recipe will be delited.
            v-card-actions
              v-spacer
              v-btn(color="error" @click="deleteRecipe()") Yes
              v-btn(@click="confirmDeleteDialog = false") Cancel
            
</template>

<script>
import RecipesService from '@/services/RecipesService'
import { BLink } from 'bootstrap-vue'

export default {
  components: {
  },
  data () {
    return {
      recipes: [],
      confirmDeleteDialog: false,
      deleteRecipe_ID: null,
      deleteRecipeName: ''
    }
  },
  methods: {
    navigateTo (navigation) {
      this.$router.push( { name: navigation.name, query: navigation.query })
    },
    showInstructions(ingredients, num) {
      if(num === 3)
        return ingredients
      var ingredients_split = ingredients.split(',').slice(0,3)
        return ingredients_split.join() + ' (...)'
    },
    showPreparationInstructions(instructions) {
      var maxLength = 50 // maximum number of characters to extract

      if(instructions.length <= maxLength)
        return instructions

      var instructions_split = instructions.split(' ')
      var instructions_split = instructions.substr(0, maxLength);

      //re-trim if we are in the middle of a word
      instructions_split = instructions_split.substr(0, Math.min(instructions_split.length, instructions_split.lastIndexOf(" ")))
      return instructions_split
      
    },
    showPreparationTime(time){
      var time_split = time.split(':')
      if(time_split[0] !== '00' )
        return `${time_split[0]} hours ${time_split[1]} minutes`
      return `${time_split[1]} minutes`
    },
    confirmDeleteDialogClicked(id, name) {
      this.confirmDeleteDialog = true
      //console.log(id, name)
      this.deleteRecipe_ID = id
      //console.log(this.deleteRecipe_ID)
      this.deleteRecipeName = name
    },
    deleteRecipe() {
      // console.log(this.deleteRecipe_ID)
      const id = this.deleteRecipe_ID
      //console.log(this.recipes.findIndex(element => element.id === id))
      this.$store.dispatch('deleteRecipe', id)
      this.confirmDeleteDialog = false
    }
    
  },
   mounted () {
    var response = RecipesService.index()
    this.recipes = response
    this.$store.dispatch('setRecipes', response)

  }
}
</script>

<template lang="pug">
  div
    section 
      div(style="margin:25px;")
        b-table(:data="recipes" default-sort="priority")
          template(slot-scope="recipes")
            b-table-column(field="id" label="ID" width="40" sortable numeric) {{ recipes.row.id }}
            b-table-column(field="name" label="Name" sortable) {{ recipes.row.name }}
            b-table-column( field="source" label="Source" sortable)
              a(v-bind:href="recipes.row.source") {{ recipes.row.source }}
            b-table-column(field="ingretients_number" label="Number of ingredients" sortable) {{ recipes.row.ingretients_number }}
            b-table-column(field="ingredients" label="Ingredients" sortable) {{ showIngredients(recipes.row.ingredients,recipes.row.ingretients_number) }}
            b-table-column(field="prep_instructions" label="Preparation instructions" sortable) {{ showPreparationInstructions(recipes.row.prep_instructions) }}
            b-table-column(field="prep_time" label="Preparation time" sortable) {{ showPreparationTime(recipes.row.prep_time) }}
            b-table-column(label="View")
              v-btn(color="primary"  @click="$router.push({name: 'details', query: {id: recipes.row.id} })") View 
            b-table-column(label="Delete")
              v-btn(color="error" @click.native="confirmDeleteDialogClicked(recipes.row.id)" ) Delete
        v-dialog(v-model="confirmDeleteDialog"  max-width="550")
          v-card
            v-card-title Are you sure you want to delete recipe with ID: {{ deleteRecipe_ID }} ?
            v-card-text By confirming this action this recipe will be deleted.
            v-card-actions
              v-spacer
              v-btn(color="error" @click="deleteRecipe()") Yes
              v-btn(@click="confirmDeleteDialog = false") Cancel
</template>

<script>
import { BLink } from 'bootstrap-vue'
import utils from '@/shared/utils'

  export default {
    props: {
      recipes:  {
        type: Array,
        required: true
    }
    },
    data () {
      return {
        confirmDeleteDialog: false,
        deleteRecipe_ID: null,
      }
    },
    methods: {
      showIngredients(ingredients, num) {
      if(num <= 3)
        return ingredients
      var ingredients_split = ingredients.split(',').slice(0,3)
        return ingredients_split.join() + ' (...)'
    },
    showPreparationInstructions(instructions) {
      var maxLength = 50 

      if(instructions.length <= maxLength)
        return instructions

      var instructions_split = instructions.split(' ')
      var instructions_split = instructions.substr(0, maxLength);

      instructions_split = instructions_split.substr(0, Math.min(instructions_split.length, instructions_split.lastIndexOf(" ")))
      return instructions_split     
    },
    confirmDeleteDialogClicked(id) {
      this.confirmDeleteDialog = true
      this.deleteRecipe_ID = id
    },
    deleteRecipe() {
      const id = this.deleteRecipe_ID
      this.$store.dispatch('deleteRecipe', id)
      this.confirmDeleteDialog = false
    },
    showPreparationTime(time){
      return utils.formatTime(time)
    }
    }

  }
</script>

<style lang="scss" scoped>

</style>
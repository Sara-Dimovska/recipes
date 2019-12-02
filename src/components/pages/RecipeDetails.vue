<template lang="pug">
  v-layout(row text-xs-center style="padding:30px;")
    v-row
      v-col(cols="6")
        v-card 
          v-card-title {{ recipe.name }}
          v-card-title(style="font-size: medium;") Recipe source:
          v-card-subtitle
            a(v-bind:href="recipe.source") {{ recipe.source }}
          v-card-title(style="font-size: medium;") Ingredients:
          v-card-subtitle
            li(v-for="ingredient in ingredients")
              | {{ ingredient }}
          v-card-title(style="font-size: medium;") Preparation time:
          v-card-subtitle {{ prep_time_formated }}
          v-btn(style="color:white; background-color:red; margin:10px;" @click.native="confirmDeleteDialog = true" ) Delete 
      v-col(cols="6")
        v-card 
          v-card-title(style="font-size: medium;") Instructions:
          v-card-subtitle {{ recipe.prep_instructions }}    
    v-dialog(v-model="confirmDeleteDialog"  max-width="500")
      v-card
        v-card-title Are you sure you want to delete this recipe?
        v-card-text By confirming this action this recipe will be delited.
        v-card-actions
          v-spacer
          v-btn(color="error" @click="deleteRecipe()") Yes
          v-btn(@click="confirmDeleteDialog = false") Cancel
</template>

<script>
import RecipesService from '@/services/RecipesService'
import utils from '@/shared/utils'

  export default {
    data () {
    return {
      recipe: {},
      confirmDeleteDialog: false,
      ingredients: [],
      prep_time_formated: ''
    }
    },
    methods: {
    deleteRecipe() {
      const id = this.$route.query.id
      this.$store.dispatch('deleteRecipe', id)
      this.confirmDeleteDialog = false
      this.$router.push( { name: 'recipes' })
    }
    },
    mounted () {
      this.recipe = this.$store.getters.getRecipeById(this.$route.query.id)
      this.ingredients = this.recipe.ingredients.split(',')

      const time = this.recipe.prep_time
      this.prep_time_formated =  utils.formatTime(time)
    }
    
  }
</script>

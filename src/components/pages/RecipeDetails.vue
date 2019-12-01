<template lang="pug">
   v-layout(row text-xs-center style="padding:30px;")
    v-flex(offset-xs3)
      v-row
        v-col(cols="8")
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
            v-card-title(style="font-size: medium;") Instructions:
            v-card-subtitle {{ recipe.prep_instructions }}
            v-btn(style="color:white; background-color:red; margin:10px;" @click.native="confirmDeleteDialog = true" ) Delete       
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
      //this.recipe = RecipesService.get(this.$route.query.id)
      this.recipe = this.$store.getters.getRecipeById(this.$route.query.id)
      this.ingredients = this.recipe.ingredients.split(',')

      const time = this.recipe.prep_time

      if(time.indexOf(':') !== -1){
        var time_split = time.split(':')
       
          
          if(time_split[0].length < 2)
            time_split[0] = `0${time_split[0]}`
          if(time_split[1].length < 2)
            time_split[1] = `0${time_split[1]}`

          this.prep_time_formated =  `${time_split[0]} hours ${time_split[1]} minutes`
        
      }
      
      if(time.length < 2)
          time = `0${time}`
      this.prep_time_formated =  `${time} minutes`
    }
    
  }
</script>

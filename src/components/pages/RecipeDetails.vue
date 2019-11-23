<template lang="pug">
  v-container(fluid)
    v-row
      v-col(cols="6")
        v-card 
          v-card-title {{ recipe.name }}
          v-card-title(style="font-size: medium;") Recipe source:
          v-card-subtitle {{ recipe.source }}
          v-card-title(style="font-size: medium;") Ingredients
          v-card-subtitle {{ recipe.ingredients }}
          v-card-title(style="font-size: medium;") Preparation time:
          v-card-subtitle {{ showPreparationTime(recipe.prep_time) }}
          v-btn(style="color:white; background-color:red; margin:10px;" ) Delete
      v-col(cols="6")
        v-card
          v-card-title(style="font-size: medium;") Instructions:
            v-card-subtitle {{ recipe.prep_instructions }}
</template>

<script>
import RecipesService from '@/services/RecipesService'

  export default {
    data () {
    return {
      recipe: {}
    }
    },
    methods: {
      showPreparationTime(time){
      var time_split = time.split(':')
      if(time_split[0] !== '00' )
        return `${time_split[0]} hours ${time_split[1]} minutes`
      return `${time_split[1]} minutes`
    }
    },
    mounted () {
      this.recipe = RecipesService.get(this.$route.query.id)
    }
    
  }
</script>

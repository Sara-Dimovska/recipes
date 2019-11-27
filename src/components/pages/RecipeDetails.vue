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
          v-card-subtitle {{  }}
          v-btn(style="color:white; background-color:red; margin:10px;" @click.native="confirmDeleteDialog = true" ) Delete       
      v-col(cols="6")
        v-card
          v-card-title(style="font-size: medium;") Instructions:
          v-card-subtitle {{ recipe.prep_instructions }}
    v-dialog(v-model="confirmDeleteDialog"  max-width="350")
      v-card
        v-card-title Are you sure you want to delete this recipe?
        v-card-text By confirming this action this recipe will be delited.
        v-card-actions
          v-spacer
          v-btn(color="error" @click="confirmDeleteDialog = false") Yes
          v-btn(@click="confirmDeleteDialog = false") Cancel
</template>

<script>
import RecipesService from '@/services/RecipesService'

  export default {
    data () {
    return {
      recipe: {},
      confirmDeleteDialog: false,
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

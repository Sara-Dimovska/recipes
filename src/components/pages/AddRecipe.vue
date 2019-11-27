<template lang="pug">
  v-container()
    h1 Create new Recipe
    v-form( justify="center")
      v-row
        v-col(cols="6")
          v-text-field(label="Recipe name" v-model="recipe.name")
      v-row
        v-col(cols="6")
          v-text-field(label="Recipe source" v-model="recipe.source")
      v-row
        v-col(cols="2") Ingredients
      v-row
        ul
          li(v-for="(ingredientsComponent, index) in ingredientsComponents" :key="index")
            Ingredients(v-on:sendIngredientsData="IngredientsData")
        v-col(cols="2")
           v-btn(color="primary" fab small dark @click="addNewIngredient") +
      v-row 
        v-col(cols="2") Preparation time:
        v-col(cols="2")
           v-text-field(label="hours" v-model="hours") 
        v-col(cols="2")
           v-text-field(label="minutes" v-model="minutes")
      v-row
        v-col(cols="2") Preparation instructions:
        v-col(cols="8" md="8")
          v-textarea(solo name="input-10-8" v-model="recipe.prep_instructions")
      v-row
        v-col(col="4")
          v-btn(style="color:white; background-color:green; margin:10px;" @click="addNewRecipe") Save
          v-btn Cancel
</template>
<script>
import Ingredients from '@/components/Ingredients'

  export default {
     data () {
    return {
        ingredientsComponents:[
          'add'
        ],
        recipe: {
          id: 0,
          name: null,
          source: null,
          ingretients_number: null,
          ingredients: null,
          prep_instructions: null,
          prep_time: null
        },
        hours: '',
        minutes: '',
        ingredients:[]
      }
    },
    methods: {
      addNewIngredient() {
        this.ingredientsComponents.push('add')
      },
      addNewRecipe() {
        let lastRecipeId = this.$store.state.ID
        this.recipe.id = ++lastRecipeId
        this.recipe.prep_time = this.hours + ":" + this.minutes
        console.log(this.recipe)
      },
      IngredientsData(data) {
        console.log(data)
      }
    },
    components: {
      Ingredients
    }
  }
</script>

<template lang="pug">
  v-layout(row text-xs-center style="margin:30px;")
    v-flex( offset-xs3)
      p(class="font-weight-black" style="font-size: 2em; margin-right:10px;") Create new recipe
      v-form( justify="center")
        v-row
          v-col(cols="8")
            v-text-field(label="Recipe name" v-model="recipe.name")
        v-row
          v-col(cols="8")
            v-text-field(label="Recipe source" v-model="recipe.source")
        v-row
          v-col(cols="2") Ingredients
          div
            v-row
              v-select(:items="ingredients" label="Filled style" style="padding-right:10px;" v-model="newIngredient")
              v-text-field(label="Quantity" style="padding-right:10px;" v-model="newIngredientQuantity")
              v-btn(color="primary" fab small dark @click="addIngredient") +
        v-row
          v-col(cols="8")
            v-textarea(solo name="input-10-8" v-model="recipe.ingredients" )
        v-row 
          v-col(cols="2") Preparation time:
          v-col(cols="2")
            v-text-field(label="hours" v-model="hours") 
          v-col(cols="2")
            v-text-field(label="minutes" v-model="minutes")
        v-row
          v-col(cols="2") Preparation instructions:
          v-col(cols="6")
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
        recipe: {
          id: 0,
          name: null,
          source: null,
          ingretients_number: null,
          ingredients: '',
          prep_instructions: null,
          prep_time: null
        },
        hours: '',
        minutes: '',
        newIngredient: '',
        newIngredientQuantity: '',
        ingredients: [
          'oil',
        'blabla'
        ]
      }
    },
    methods: {
      addIngredient() {
        // this.ingredientsComponents.push('add')
        let ingredient = ''
        if(this.recipe.ingredients == '') {
          ingredient = `${this.newIngredient} ${this.newIngredientQuantity}`
        } else {
          ingredient = `, ${this.newIngredient} ${this.newIngredientQuantity}`
        }
        this.newIngredient = ''
        this.newIngredientQuantity = ''
        this.recipe.ingredients += ingredient
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

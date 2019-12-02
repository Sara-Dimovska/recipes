<template lang="pug">
  v-layout(row text-xs-center style="margin:30px;")
    v-flex(offset-xs3)
      p(class="font-weight-black" style="font-size: 2em;") Create new recipe
      v-form( justify="center")
        v-row
           v-col(cols="8")       
        v-row
          v-col(cols="8")
            v-text-field(label="Recipe name" v-model="recipe.name" v-model.trim="$v.recipe.name.$model")
            .validationError(v-if="!$v.recipe.name.required")
              | Recipe name is required.
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
            v-textarea(solo name="input-10-8" v-model="recipe.ingredients" v-model.trim="$v.recipe.ingredients.$model")
        .validationError(v-if="!$v.recipe.ingredients.required")
          |  Ingredients are required.
        v-row 
          v-col(cols="2") Preparation time:
          v-col(cols="2")
            v-text-field(label="hours" v-model="hours") 
          v-col(cols="2")
            v-text-field(label="minutes" v-model="minutes" v-model.trim="$v.minutes.$model")
        .validationError(v-if="!$v.minutes.required")
          | Preparation time is required.
        v-row
          v-col(cols="2") Preparation instructions:
          v-col(cols="6")
            v-textarea(solo name="input-10-8" v-model="recipe.prep_instructions" v-model.trim="$v.recipe.prep_instructions.$model")
        .validationError(v-if="!$v.recipe.prep_instructions.required")
          | Instructions are required.
        v-row
          v-col(col="4")
            v-btn(style="color:white; background-color:green; margin:10px;" @click="addNewRecipe") Save
            v-btn(@click="$router.push( { name: 'recipes' })") Cancel
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators'

  export default {
     data () {
    return {
        recipe: {
          id: 0,
          name: null,
          source: null,
          ingretients_number: 0,
          ingredients: '',
          prep_instructions: null,
          prep_time: null
        },
        hours: '',
        minutes: '',
        newIngredient: '',
        newIngredientQuantity: '',
        ingredients: [
          'Flour',
          'Milk',
          'Oil',
          'Salt',
          'Sugar',
          'Eggs',
          'Tomatoes',
          'Peppers',
          'Cheese',
          'Potatoes',
          'Meat'
        ]
      }
    },
    validations: {
      recipe: {
        name: {
          required
        },
        ingredients: {
          required
        },
        prep_instructions: {
          required
        }
      },
      minutes: { required }
    },
    methods: {
      addIngredient() {
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
        if (!this.$v.$invalid) {
          let lastRecipeId = this.$store.state.ID
          this.recipe.id = ++lastRecipeId
          if(this.hours != '')
            this.recipe.prep_time = this.hours + ":" + this.minutes
          else
            this.recipe.prep_time = this.minutes

          let ingredients_number = this.recipe.ingredients.split(',')
          this.recipe.ingretients_number = ingredients_number.length
          
          // save recipe
          console.log(this.recipe)
          this.$store.dispatch('addRecipe', this.recipe)

          // ingrement last recipe ID
          this.$store.dispatch('increment_ID')

          this.$router.push( { name: 'recipes' })
        }

      }
    },
    components: {
    }
  }
</script>
<style scoped>
.validationError{
  color: red;
}
</style>
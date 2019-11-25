<template lang="pug">
  v-container()
    h1 Create new Recipe
    v-form( justify="center")
      v-row
        v-col(cols="6")
          v-text-field(label="Recipe name")
      v-row
        v-col(cols="6")
          v-text-field(label="Recipe source")
      v-row
        v-col(cols="2") Ingredients
      v-row
        ul
          li(v-for="(ingredientsComponent, index) in ingredientsComponents" :key="index")
            Ingredients(v-bind="add")
        v-col(cols="2")
           v-btn(color="primary" fab small dark @click="addNewIngredient") +
      v-row 
        v-col(cols="2") Preparation time:
        v-col(cols="2")
           v-text-field(label="hours") 
        v-col(cols="2")
           v-text-field(label="minutes")
      v-row
        v-col(cols="2") Preparation instructions:
        v-col(cols="8" md="8")
          v-textarea(solo name="input-10-8" )
      v-row
        v-col(col="4")
          v-btn(style="color:white; background-color:green; margin:10px;") Save
          v-btn Cancel
</template>
<script>
import Ingredients from '@/components/Ingredients'

  export default {
     data () {
    return {
        ingredientsComponents:[
          'add'
        ]
      }
    },
    methods: {
      addNewIngredient() {
        this.ingredientsComponents.push('add')
      }
    },
    components: {
      Ingredients
    }
  }
</script>

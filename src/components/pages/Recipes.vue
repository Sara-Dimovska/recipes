<template >
  <div>
    <b-table :data="recipes" default-sort="priority">
          <template slot-scope="recipes">

            <b-table-column field="id" label="ID" width="40" sortable numeric>
              {{ recipes.row.id }}
            </b-table-column>

            <b-table-column field="name" label="Name" sortable>
              {{ recipes.row.name }}
            </b-table-column>

            <b-table-column field="source" label="Source" sortable>
              {{ recipes.row.source }}
            </b-table-column>

            <b-table-column field="ingretients_number" label="Number of ingredients" sortable>
              {{ recipes.row.ingretients_number }}
            </b-table-column>

            <b-table-column field="ingredients" label="Ingredients" sortable>
              {{ showInstructions(recipes.row.ingredients,recipes.row.ingretients_number) }}
            </b-table-column>

            <b-table-column field="prep_instructions" label="Preparation instructions" sortable>
              {{ showPreparationInstructions(recipes.row.prep_instructions) }}
            </b-table-column>

            <b-table-column field="prep_time" label="Preparation time" sortable>
              {{ showPreparationTime(recipes.row.prep_time) }}
            </b-table-column>


            <b-table-column label="View">
               <v-btn cyan @click="navigateTo({name: 'details'})"  > View </v-btn>
            </b-table-column>

            <b-table-column label="Delete">
               <b-button variant="success">Delete</b-button>
            </b-table-column>
          </template>
        </b-table>
  </div>
</template>

<script>
import RecipesService from '@/services/RecipesService'

export default {
  components: {
  },
  data () {
    return {
      recipes: [],
      initialRecipes: [
        {
        "id": "1",
        "name":"Лиснато тесто со фил од тиква",
        "source": "https://moirecepti.mk/post/",
        "ingretients_number": 3,
        "ingredients": "500 гр. пире од тиква, 200 гр. крем сирење,250 гр. купено, готово лиснато тесто",
        "prep_instructions": "Во длабок сад се меша бла бла бла",
        "prep_time": "02:15"
    },
    {
        "id": "2",
        "name":"Лиснато тесто со фил од тиква",
        "source": "https://moirecepti.mk/post/",
        "ingretients_number": 8,
        "ingredients": "1, 2,3, готово лиснато тесто,250 гр. купено, готово лиснато тесто,250 гр. купено, готово лиснато тесто",
        "prep_instructions": "Во длабок сад се меша бла бла бла Во длабок сад се меша бла бла бла Во длабок сад се меша бла бла бла  Во длабок сад се меша бла бла бла",
        "prep_time": "00:45"
    }
    ]
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
    }
    
  },
  async mounted () {
    //this.recipes = (await RecipesService.index())
    //console.log(this.recipes)
    this.recipes = this.initialRecipes
  }
}
</script>

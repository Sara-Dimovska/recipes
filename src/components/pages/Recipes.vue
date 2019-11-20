<template lang="pug">
  div
    div(v-for="recipe in recipes" :key="recipe.id") {{ recipe.name }}
</template>

<script>
import RecipesService from '@/services/RecipesService'

export default {
  components: {
  },
  data () {
    return {
      recipes: null
    }
  },
  async mounted () {
    this.recipes = (await RecipesService.index())
    console.log(this.recipes)
  }
}
</script>

<template lang="pug">
  div
    RecipesHeader
    RecipesTable( :recipes="recipes")    
</template>

<script>

import RecipesHeader from '@/components/RecipesHeader'
import RecipesTable from '@/components/RecipesTable'

export default {
  components: {
    RecipesHeader,
    RecipesTable
  },
  data () {
    return {
      recipes: []
    }
  },
  mounted () {
    this.recipes = this.$store.getters.recipes

  }
}
</script>

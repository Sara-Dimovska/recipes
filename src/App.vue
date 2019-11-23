<template lang="pug">
  div(id="app")
    v-app
      div
        router-view
</template>

<script>
import Recipes from '@/components/pages/Recipes'

export default {
  name: 'app',
  components: {
    Recipes
  }
}
</script>

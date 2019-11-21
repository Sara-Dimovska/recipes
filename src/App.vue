<template lang="pug">
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

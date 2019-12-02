<template lang="pug">
  div
    header
      div
        v-row(style="margin:25px;")
          p(class="font-weight-black" style="font-size: 2em; margin-right:10px;") Recipes:
          v-btn(color="primary" fab small dark @click="$router.push( { name: 'add' })") +
</template>

<script>
  export default {
    
  }
</script>

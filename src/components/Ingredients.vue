<template lang="pug">
  div
    v-row
      v-select(:items="ingredients"  label="Filled style" style="padding-right:10px;")
      v-text-field(label="Quantity" style="padding-right:10px;")
</template>

<script>
  export default {
    data () {
    return {
      ingredients: [
        'oil',
        'blabla'
      ]
    }
  },
  methods: {
    passData() {
      this.$emit('sendIngredientsData','asd')
    }
  }
  }
</script>

<style lang="scss" scoped>

</style>
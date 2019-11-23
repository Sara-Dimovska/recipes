import recipes from '@/data/recipes'

export default {
  index () {
    return recipes
  },
  get (id) {
    // console.log(recipes.find(element => element.id === id))
    return recipes.find(element => element.id === id)
  }
}

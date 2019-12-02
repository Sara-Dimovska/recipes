import recipes from '@/data/recipes'

export default {
  index () {
    return recipes
  },
  get (id) {
    return recipes.find(element => element.id === id)
  }
}

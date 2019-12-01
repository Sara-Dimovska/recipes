import Vue from 'vue'
import Router from 'vue-router'
import Recipes from '@/components/pages/Recipes'
import RecipeDetails from '@/components/pages/RecipeDetails'
import AddRecipe from '@/components/pages/AddRecipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/recipes/details',
      name: 'details',
      component: RecipeDetails
    },
    {
      path: '/recipes/add',
      name: 'add',
      component: AddRecipe
    }
  ]
})

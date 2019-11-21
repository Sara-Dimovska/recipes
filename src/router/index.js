import Vue from 'vue'
import Router from 'vue-router'
import Recipes from '@/components/pages/Recipes'
import RecipeDetails from '@/components/pages/RecipeDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/details',
      name: 'details',
      component: RecipeDetails
    }
  ]
})

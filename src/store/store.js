import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    recipes: [],
    ID: 3
  },
  mutations: {
    setRecipes (state, recipes) {
      state.recipes = recipes
    },
    addRecipe (state, recipe) {
      state.recipes.push(recipe)
    },
    deleteRecipe (state, id) {
      const index = state.recipes.findIndex(element => element.id === id)
      state.recipes.splice(index, 1)
      state.ID--
    }
  },
  actions: {
    setRecipes ({ commit }, recipes) {
      commit('setRecipes', recipes)
    },
    addRecipe ({ commit }, recipe) {
      commit('addRecipe', recipe)
    },
    deleteRecipe ({ commit }, id) {
      commit('deleteRecipe', id)
    }
  }
})

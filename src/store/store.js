import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    recipes: [
      {
        id: 1,
        name: 'Совршено меки, посни кифлички',
        source: 'https://www.crnobelo.com/hrana/recepti/72516-sovrseno-meki-posni-kiflicki',
        ingretients_number: 8,
        ingredients: '400ml млака вода, 1 лажичка шеќер, 1 лажичка куркума, 2 лажички сол, 1 лажичка оцет, 20g свеж квасец, 700-750g брашно, 10g прашок за печиво',
        prep_instructions: 'Загрејте ја рерната на 250 степени. На тава со димензии 13х18cm ставете хартија за печење и премачкајте ја со путер или малку масло. Јајцата изматете ги заедно со млекото, медот и ванилата. Во посебен сад промешајте го брашното со прашокот за печење, содата, малку сол и циметот. На крај додадете го стопениот путер. Измешајте ги смесите и мешајте додека не се соединат. Во подготвената тава распоредете го тестото рамномерно, па додадете ги слатките додатоци за кои сте се решиле.',
        prep_time: '30'
      }
    ],
    ID: 1
  },
  getters: {
    recipes: state => state.recipes,
    getRecipeById: state => id => {
      return state.recipes.find(recipe => recipe.id === id)
    }
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
    },
    increment_ID (state) {
      state.ID++
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
    },
    increment_ID ({ commit }) {
      commit('increment_ID')
    }
  }
})

/**
 * Created by lichb on 2017/2/7.
 */
import {TOGGLE_MAIN_MENU} from '../mutation-types'

// initial state
const state = {
  isFold: false
}

// getters
const getters = {
  menuIsFold: state => state.isFold
}

//actions
const actions = {
  toggleMenu({commit}){
    commit(TOGGLE_MAIN_MENU)
  }
}

//mutations
const mutations = {
  [TOGGLE_MAIN_MENU] (state) {
    state.isFold = !state.isFold
  },
}

//export
export default {
  state,
  getters,
  actions,
  mutations
}

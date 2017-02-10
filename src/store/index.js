/**
 * Created by lichb on 2017/2/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate' //vuex持久化localstorage插件
import * as state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import menu from './modules/menu'
import login from './modules/login'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    menu,
    login
  },
  strict: debug,
  plugins: debug ? [createLogger(), createPersistedState()] : [createPersistedState()]
})

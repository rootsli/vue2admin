/**
 * Created by lichb on 2017/2/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate' //vuex持久化localstorage插件
import * as Cookies from 'js-cookie';
import * as state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import menu from './modules/menu'
import login from './modules/login'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

let persistedState = {
  paths: ['login.tokens'],
  getState: (key) => Cookies.getJSON(key),
  setState: (key, state) => Cookies.set(key, state, {expires: 3}) //expires->cookie过期时间，单位为天
}

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
  plugins: debug ? [createLogger(), createPersistedState(persistedState)] : [createPersistedState(persistedState)]
})

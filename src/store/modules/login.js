/**
 * Created by lichb on 2017/2/7.
 */
import {LOGIN_IN, LOGIN_OUT} from '../mutation-types'
import tokens from '../../apis/tokens'

// initial state
const state = {
  tokens: ''
}

// getters
const getters = {
  tokens: state => state.tokens
}

//actions
const actions = {
  login({commit, state}, user){
    tokens.getTokens(user.name, user.pass).then((data) => {
      //处理请求success
      commit(LOGIN_IN, {tokens: data.tokens})
    }, (error) => {
      //处理请求fail
      commit(LOGIN_IN, {tokens: ''})
    })
  },
  logout({commit}){
    commit(LOGIN_OUT)
  }
}

//mutations
const mutations = {
  [LOGIN_IN] (state, {tokens}) {
    state.tokens = tokens
  },
  [LOGIN_OUT] (state) {
    state.tokens = ''
  }
}

//export
export default {
  state,
  getters,
  actions,
  mutations
}

import { createStore, createLogger } from 'vuex'
import mutations from './mutations'
import state from './state'
import * as getters from './getters'
import * as actions from './actions'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state,
  getters,
  mutations,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

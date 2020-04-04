import Vue from 'vue'
import Vuex from 'vuex'

// export default new Vuex.Store({
//   state: {
//
//   },
//   mutations: {
//
//   },
//   actions: {
//
//   }
// })
//
//
//
// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)

import createPersistedState from 'vuex-persistedstate'

// @ts-ignore
import * as Cookies from 'js-cookie'

// import mainstate from './modules/mainState.js';
// import cart from './modules/cart';

// import {cartState} from './modules/cart/state';
// import {cartGetters} from './modules/cart/getters';
// import {cartMutations} from './modules/cart/mutations';
// import {cartActions} from './modules/cart/actions';

import { mainState } from './modules/mainapp/state'
import { mainGetters } from './modules/mainapp/getters'
import { mainMutations } from './modules/mainapp/mutations'
import { mainActions } from './modules/mainapp/actions'

Vue.use(Vuex)

// const state = cart.state

// const cart = {
//     state: cartState,
//     getters: cartGetters,
//     mutations: cartMutations,
//     actions: cartActions
// };

const main = {
  state: mainState,
  getters: mainGetters,
  mutations: mainMutations,
  actions: mainActions
}

export default new Vuex.Store({

  plugins: [
    createPersistedState({
      // paths: ['cart'],
      // storage: {
      //     getItem: key => Cookies.get(key),
      //     setItem: (key, value) => Cookies.set(key, value),
      //     removeItem: key => Cookies.remove(key)
      // }
    })
  ],
  modules: {
    // cart : cart,
    main: main
  }

})

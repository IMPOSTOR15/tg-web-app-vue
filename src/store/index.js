import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: '1',
        name: 'Smartfone1',
        price: '10000',
        countInCart: 0,
      },
      {
        id: '2',
        name: 'Smartfone2',
        price: '10000',
        countInCart: 0,
      },
      {
        id: '3',
        name: 'Smartfone3',
        price: '10000',
        countInCart: 0,
      },
      {
        id: '4',
        name: 'Smartfone4',
        price: '10000',
        countInCart: 0,
      },
      {
        id: '5',
        name: 'Smartfone5',
        price: '10000',
        countInCart: 0,
      },
      {
        id: '6',
        name: 'Smartfone6',
        price: '10000',
        countInCart: 0,
      },
      {
        id: '7',
        name: 'Smartfone7',
        price: '10000',
        countInCart: 0,
      },
      {
        id: '8',
        name: 'Smartfone8',
        price: '10000',
        countInCart: 0,
      },
      {
        id: '9',
        name: 'Smartfone9',
        price: '10000',
        countInCart: 0,
      },
      {
        id: '10',
        name: 'Smartfone10',
        price: '10000',
        countInCart: 0,
      },
    ]
  },
  getters: {
    PRODUCTS: state => {
      return state.products;
    },
  },
  mutations: {
    SET_PRODUCTS: (state, payload) => {
      state.products = payload;
    },
  
    ADD_PRODUCT: (state, payload) => {
      state.products.push(payload);
    },
  },
  actions: {
    GET_PRODUCTS: async (context, payload) => {
      // let {data} = await Axios.get('');
      context.commit('SET_PRODUCTS', payload);
    },
  
    SAVE_PRODUCT: async (context, payload) => {
      // let {data} = await Axios.post('');
      context.commit('ADD_PRODUCT', payload);
    },
  },
  modules: {
  }
})

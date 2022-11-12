import { createStore } from 'vuex'

export default createStore({
  state: {
    generateProducts: [
      {
        id: '1',
        name: 'Oversized Tee',
        price: '9.99',
        imgSrc: 'https://svgshare.com/i/o1c.svg',
      },
      {
        id: '2',
        name: 'Oversized Hoodie',
        price: '14.99',
        imgSrc: 'https://svgshare.com/i/o22.svg',
      },
      {
        id: '3',
        name: 'Tote Bag',
        price: '4.99',
        imgSrc: 'https://svgshare.com/i/o0J.svg',
      },
      {
        id: '4',
        name: 'iPhone Case',
        price: '2.99',
        imgSrc: 'https://svgshare.com/i/o1b.svg',
      },
      {
        id: '5',
        name: 'Cap',
        price: '5.99',
        imgSrc: 'https://svgshare.com/i/o1a.svg',
      },
      {
        id: '6',
        name: 'Notebook',
        price: '5.99',
        imgSrc: 'https://svgshare.com/i/o0r.svg',
      }
    ],
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
    GENERATEPRODUCTS: state => {
      return state.generateProducts;
    },
  },
  mutations: {
    SET_PRODUCTS: (state, payload) => {
      state.products = payload;
    },
  
    ADD_PRODUCT: (state, payload) => {
      state.products.push(payload);
    },


    SET_GENERATEPRODUCTS: (state, payload) => {
      state.generateProducts = payload;
    },
  
    ADD_GENERATEPRODUCT: (state, payload) => {
      state.generateProducts.push(payload);
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


    GET_GENERATEPRODUCTS: async (context, payload) => {
      // let {data} = await Axios.get('');
      context.commit('SET_GENERATEPRODUCTS', payload);
    },
  
    SAVE_GENERATEPRODUCT: async (context, payload) => {
      // let {data} = await Axios.post('');
      context.commit('ADD_GENERATEPRODUCT', payload);
    },
  },
  modules: {
  }
})

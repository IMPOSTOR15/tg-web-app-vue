import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedProduct: {},
    selectedImage: {},
    selectedCollection: {},
    generateProducts: [
      {
        id: '1',
        name: 'Футболка',
        price: '599',
        imgSrc: 'https://svgshare.com/i/oFm.svg',
        isSelected: false,
      },
      {
        id: '2',
        name: 'Худи',
        price: '1149',
        imgSrc: 'https://svgshare.com/i/oEE.svg',
        isSelected: false,
      },
      {
        id: '4',
        name: 'Чехол',
        price: '349',
        imgSrc: 'https://svgshare.com/i/oEz.svg',
        isSelected: false,
      },
      {
        id: '5',
        name: 'Кепка',
        price: '449',
        imgSrc: 'https://svgshare.com/i/oEZ.svg',
        isSelected: false,
      },
      {
        id: '3',
        name: 'Шоппер',
        price: '449',
        imgSrc: 'https://svgshare.com/i/oEj.svg',
        isSelected: false,
      },
      {
        id: '6',
        name: 'Блокнот',
        price: '349',
        imgSrc: 'https://svgshare.com/i/oFn.svg',
        isSelected: false,
      }
    ],
    basicColections: [
      {
        id: '1',
        name: 'SAINTS ROBOTS',
        author: 'ILUXA KISSELMAN',
        imgSrc: 'https://svgshare.com/i/o1m.svg',
        isSelected: false,
        description: 'Once on a far distant planet, robots were left unattended...',
        items: [
          {
            id: '1',
            name: 'Обретение космической энергии',
            imgSrc: 'https://svgshare.com/i/o31.svg'
          },
          {
            id: '2',
            name: 'Святой решатель',
            imgSrc: 'https://svgshare.com/i/o32.svg'
          },
          {
            id: '3',
            name: 'Союз царя людей и царя роботов',
            imgSrc: 'https://svgshare.com/i/o2F.svg'
          },
          {
            id: '4',
            name: 'Святые создатели',
            imgSrc: 'https://svgshare.com/i/o2B.svg'
          },
          {
            id: '5',
            name: 'Великий взвешиватель',
            imgSrc: 'https://svgshare.com/i/oGA.svg'
          },
          {
            id: '6',
            name: 'Святой счислитель',
            imgSrc: 'https://svgshare.com/i/oFB.svg'
          }

        ]
      },
      {
        id: '2',
        name: 'CREATURES',
        author: 'ILUXA KISSELMAN',
        imgSrc: 'https://svgshare.com/i/o1S.svg',
        isSelected: false,
        description: 'Creatures is a collection of 100 portraits of characters living in the virtual space of the crypto universe...',
        items: [
          {
            id: '1',
            name: '002 ALIEN',
            imgSrc: 'https://svgshare.com/i/oFC.svg'
          },
          {
            id: '2',
            name: '003 DOG',
            imgSrc: 'https://svgshare.com/i/oEp.svg'
          },
          {
            id: '3',
            name: '004 ROBOT',
            imgSrc: 'https://svgshare.com/i/oGg.svg'
          },
          {
            id: '4',
            name: '005 GIRL',
            imgSrc: 'https://svgshare.com/i/oGB.svg'
          },
          {
            id: '5',
            name: '006 DUDE',
            imgSrc: 'https://svgshare.com/i/oFs.svg'
          },
          {
            id: '6',
            name: '007 DUDE2',
            imgSrc: 'https://svgshare.com/i/oEd.svg'
          },
          {
            id: '7',
            name: '010 YAWNING MAN',
            imgSrc: 'https://svgshare.com/i/oF0.svg'
          },
          {
            id: '8',
            name: '011 SCIENTIST',
            imgSrc: 'https://svgshare.com/i/oFX.svg'
          },
          {
            id: '9',
            name: '014 DAEMON',
            imgSrc: 'https://svgshare.com/i/oGh.svg'
          },
          {
            id: '10',
            name: '021 ROBOT3',
            imgSrc: 'https://svgshare.com/i/oFt.svg'
          },
          {
            id: '11',
            name: '023 ALIEN3',
            imgSrc: 'https://svgshare.com/i/oGC.svg'
          },
          {
            id: '12',
            name: '024 BEARDED2',
            imgSrc: 'https://svgshare.com/i/oFg.svg'
          },
          {
            id: '13',
            name: '026 ROBOT4',
            imgSrc: 'https://svgshare.com/i/oGi.svg'
          },

        ]
      },
      {
        id: '3',
        name: 'ABSTRACTIONS',
        author: 'Максим Барышников',
        imgSrc: 'https://svgshare.com/i/o1k.svg',
        isSelected: false,
        description: 'The collection of 450 abstract photographs of Moscow streets',
        items: [
          {
            id: '1',
            name: '02/02/2013',
            imgSrc: 'https://svgshare.com/i/o2G.svg'
          },
          {
            id: '2',
            name: '11/03/2013',
            imgSrc: 'https://svgshare.com/i/o42.svg'
          },
          {
            id: '3',
            name: '28/05/2013',
            imgSrc: 'https://svgshare.com/i/o3W.svg'
          },
          {
            id: '4',
            name: '07/04/2013',
            imgSrc: 'https://svgshare.com/i/o2V.svg'
          },
          {
            id: '5',
            name: '30/05/2013',
            imgSrc: 'https://svgshare.com/i/o3X.svg'
          },
          {
            id: '6',
            name: '08/05/2013',
            imgSrc: 'https://svgshare.com/i/o33.svg'
          }
        ]
      },
    ],
    premiumColections: [
      {
        id: '1',
        name: 'RECENT PAINTINGS',
        author: 'Malcolm T. Liepke',
        imgSrc: 'https://svgshare.com/i/o1n.svg',
        
        isSelected: false,
      },
    ],
    generatedMerchImages: [
      {
        id: '1',
        product_id: '3',
        collection_id: '2',
        img_id: '2',
        imgSrc: 'https://svgshare.com/i/oGD.svg',
        imgName: 'shoperCreatures003Dog.svg',
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
    BASICCOLECTIONS: state => {
      return state.basicColections;
    },
    PREMIUMCOLECTIONS: state => {
      return state.premiumColections;
    },
    SELECTEDPRODUCT: state => {
      return state.selectedProduct
    },
    SELECTEDCOLLECTION: state => {
      return state.selectedCollection
    },
    SELECTEDIMAGE: state => {
      return state.selectedImage
    },
    GENERATEDMERCHIMAGES: state => {
      return state.generatedMerchImages
    }
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

    SET_BASICCOLECTIONS: (state, payload) => {
      state.basicColections = payload;
    },
    ADD_BASICCOLECTION: (state, payload) => {
      state.basicColections.push(payload);
    },

    SET_PREMIUMCOLECTIONS: (state, payload) => {
      state.premiumColections = payload;
    },
    ADD_PREMIUMCOLECTION: (state, payload) => {
      state.premiumColections.push(payload);
    },


    SET_SELECTEDPRODUCT: (state, payload) => {
      state.selectedProduct = payload;
    },
    SET_SELECTEDCOLLECTION: (state, payload) => {
      state.selectedCollection = payload;
    },
    SET_SELECTEDIMAGE: (state, payload) => {
      state.selectedImage = payload;
    }
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

    GET_PREMIUMCOLECTIONS: async (context, payload) => {
      // let {data} = await Axios.get('');
      context.commit('SET_PREMIUMCOLECTIONS', payload);
    },
  
    SAVE_PREMIUMCOLECTION: async (context, payload) => {
      // let {data} = await Axios.post('');
      context.commit('ADD_PREMIUMCOLECTION', payload);
    },

    UPDATE_SELECTEDPRODUCT: async (context, payload) => {
      context.commit('SET_SELECTEDPRODUCT', payload)
    },
    UPDATE_SELECTEDCOLLECTION: async (context, payload) => {
      context.commit('SET_SELECTEDCOLLECTION', payload)
    },
    UPDATE_SELECTEDIMAGE: async (context, payload) => {
      context.commit('SET_SELECTEDIMAGE', payload)
    }
  },
  modules: {
  }
})

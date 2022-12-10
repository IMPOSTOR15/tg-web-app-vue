import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedProduct: {},
    selectedImage: {},
    selectedAiImage: {},
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
    ],
    basicColections: [
      {
        id: '1',
        name: 'SAINTS ROBOTS',
        author: 'ILUXA KISSELMAN',
        imgSrc: 'https://svgshare.com/i/o1m.svg',
        imgLocalSrc: '/basicColections/collection_1.png',
        isSelected: false,
        description: 'Once on a far distant planet, robots were left unattended...',
        items: [
          {
            id: '1',
            name: 'Обретение космической энергии',
            imgSrc: 'https://svgshare.com/i/o31.svg',
            imgLocalSrc: 'SaintsRobots/ОбретениеКосмическойЭнергии.png'
          },
          {
            id: '2',
            name: 'Святой решатель',
            imgSrc: 'https://svgshare.com/i/o32.svg',
            imgLocalSrc: 'SaintsRobots/СвятойРешатель.png'
          },
          {
            id: '3',
            name: 'Союз царя людей и царя роботов',
            imgSrc: 'https://svgshare.com/i/o2F.svg',
            imgLocalSrc: 'SaintsRobots/СоюзЦаряЛюдейИЦаряРоботов.png'
          },
          {
            id: '4',
            name: 'Святые создатели',
            imgSrc: 'https://svgshare.com/i/o2B.svg',
            imgLocalSrc: 'SaintsRobots/СвятыеСоздатели.png'
          },
          {
            id: '5',
            name: 'Великий взвешиватель',
            imgSrc: 'https://svgshare.com/i/oGA.svg',
            imgLocalSrc: 'SaintsRobots/ВеликийВзвешиватель.png'
          },
          {
            id: '6',
            name: 'Святой счислитель',
            imgSrc: 'https://svgshare.com/i/oFB.svg',
            imgLocalSrc: 'SaintsRobots/СвятойСчислитель.png'
          }

        ]
      },
      {
        id: '2',
        name: 'CREATURES',
        author: 'ILUXA KISSELMAN',
        imgSrc: 'https://svgshare.com/i/o1S.svg',
        imgLocalSrc: '/basicColections/collection_2.png',
        isSelected: false,
        description: 'Creatures is a collection of 100 portraits of characters living in the virtual space of the crypto universe...',
        items: [
          {
            id: '1',
            name: '002 ALIEN',
            imgSrc: 'https://svgshare.com/i/oFC.svg',
            imgLocalSrc: 'Creatures/002ALIEN.png'
          },
          {
            id: '2',
            name: '003 DOG',
            imgSrc: 'https://svgshare.com/i/oEp.svg',
            imgLocalSrc: 'Creatures/003DOG.png'
          },
          {
            id: '3',
            name: '004 ROBOT',
            imgSrc: 'https://svgshare.com/i/oGg.svg',
            imgLocalSrc: 'Creatures/004ROBOT.png'
          },
          {
            id: '4',
            name: '005 GIRL',
            imgSrc: 'https://svgshare.com/i/oGB.svg',
            imgLocalSrc: 'Creatures/005GIRL.png'
          },
          {
            id: '5',
            name: '006 DUDE',
            imgSrc: 'https://svgshare.com/i/oFs.svg',
            imgLocalSrc: 'Creatures/006DUDE.png'
          },
          {
            id: '6',
            name: '007 DUDE2',
            imgSrc: 'https://svgshare.com/i/oEd.svg',
            imgLocalSrc: 'Creatures/007DUDE2.png'
          },
          {
            id: '7',
            name: '010 YAWNING MAN',
            imgSrc: 'https://svgshare.com/i/oF0.svg',
            imgLocalSrc: 'Creatures/010YAWNINGMAN.png'
          },
          {
            id: '8',
            name: '011 SCIENTIST',
            imgSrc: 'https://svgshare.com/i/oFX.svg',
            imgLocalSrc: 'Creatures/011SCIENTIST.png'
          },
          {
            id: '9',
            name: '014 DAEMON',
            imgSrc: 'https://svgshare.com/i/oGh.svg',
            imgLocalSrc: 'Creatures/014DAEMON.png'
          },
          {
            id: '10',
            name: '021 ROBOT3',
            imgSrc: 'https://svgshare.com/i/oFt.svg',
            imgLocalSrc: 'Creatures/021ROBOT3.png'
          },
          {
            id: '11',
            name: '023 ALIEN3',
            imgSrc: 'https://svgshare.com/i/oGC.svg',
            imgLocalSrc: 'Creatures/023ALIEN3.png'
          },
          {
            id: '12',
            name: '024 BEARDED2',
            imgSrc: 'https://svgshare.com/i/oFg.svg',
            imgLocalSrc: 'Creatures/024BEARDED2.png'
          },
          {
            id: '13',
            name: '026 ROBOT4',
            imgSrc: 'https://svgshare.com/i/oGi.svg',
            imgLocalSrc: 'Creatures/026ROBOT4.png'
          },

        ]
      },
      {
        id: '3',
        name: 'ABSTRACTIONS',
        author: 'Максим Барышников',
        // imgSrc: 'https://svgshare.com/i/o1k.svg',
        imgSrc: 'https://svgshare.com/i/oWZ.svg',
        imgLocalSrc: '/basicColections/collection_3.png',
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
      //шоперы
      //Creatures
      {
        id: '1',
        product_id: '3',
        collection_id: '2',
        img_id: '1',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Creatures/002ALIEN.png',
      },
      {
        id: '2',
        product_id: '3',
        collection_id: '2',
        img_id: '2',
        imgSrc: 'https://svgshare.com/i/oGD.svg',
        imgLocalSrc: 'shoopers/Creatures/003DOG.png',
      },
      {
        id: '3',
        product_id: '3',
        collection_id: '2',
        img_id: '3',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Creatures/004ROBOT.png',
      },
      {
        id: '4',
        product_id: '3',
        collection_id: '2',
        img_id: '4',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Creatures/005GIRL.png',
      },
      {
        id: '5',
        product_id: '3',
        collection_id: '2',
        img_id: '5',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Creatures/006DUDE.png',
      },
      {
        id: '6',
        product_id: '3',
        collection_id: '2',
        img_id: '6',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Creatures/007DUDE2.png',
      },
      {
        id: '7',
        product_id: '3',
        collection_id: '2',
        img_id: '7',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Creatures/010YAWNINGMAN.png',
      },
      {
        id: '8',
        product_id: '3',
        collection_id: '2',
        img_id: '8',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Creatures/011SCIENTIST.png',
      },
      {
        id: '9',
        product_id: '3',
        collection_id: '2',
        img_id: '9',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Creatures/014DAEMON.png',
      },
      {
        id: '10',
        product_id: '3',
        collection_id: '2',
        img_id: '10',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Creatures/021ROBOT3.png',
      },
      {
        id: '11',
        product_id: '3',
        collection_id: '2',
        img_id: '11',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Creatures/023ALIEN3.png',
      },
      {
        id: '12',
        product_id: '3',
        collection_id: '2',
        img_id: '12',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Creatures/024BEARDED2.png',
      },
      {
        id: '13',
        product_id: '3',
        collection_id: '2',
        img_id: '13',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Creatures/026ROBOT4.png',
      },
        //Роботы  
      {
        id: '14',
        product_id: '3',
        collection_id: '1',
        img_id: '1',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Robots/ОбретениеКосмическойЭнергии.png',
      },
      {
        id: '15',
        product_id: '3',
        collection_id: '1',
        img_id: '2',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Robots/СвятойРешатель.png',
      },
      {
        id: '16',
        product_id: '3',
        collection_id: '1',
        img_id: '3',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Robots/СоюзЦаряЛюдейИЦаряРоботов.png',
      },
      {
        id: '17',
        product_id: '3',
        collection_id: '1',
        img_id: '4',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Robots/СвятыеСоздатели.png',
      },
      {
        id: '18',
        product_id: '3',
        collection_id: '1',
        img_id: '5',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Robots/ВеликийВзвешиватель.png',
      },
      {
        id: '19',
        product_id: '3',
        collection_id: '1',
        img_id: '6',
        imgSrc: '',
        imgLocalSrc: 'shoopers/Robots/СвятойСчислитель.png',
      },
      //
      //футболки
      //
      //Creatures
      //
      {
        id: '20',
        product_id: '1',
        collection_id: '2',
        img_id: '1',
        imgSrc: '',
        imgLocalSrc: 'shirts/Creatures/002ALIEN.png',
      },
      {
        id: '21',
        product_id: '1',
        collection_id: '2',
        img_id: '2',
        imgSrc: '',
        imgLocalSrc: 'shirts/Creatures/003DOG.png',
      },
      {
        id: '22',
        product_id: '1',
        collection_id: '2',
        img_id: '3',
        imgSrc: '',
        imgLocalSrc: 'shirts/Creatures/004ROBOT.png',
      },
      {
        id: '23',
        product_id: '1',
        collection_id: '2',
        img_id: '4',
        imgSrc: '',
        imgLocalSrc: 'shirts/Creatures/005GIRL.png',
      },
      {
        id: '24',
        product_id: '1',
        collection_id: '2',
        img_id: '5',
        imgSrc: '',
        imgLocalSrc: 'shirts/Creatures/006DUDE.png',
      },
      {
        id: '25',
        product_id: '1',
        collection_id: '2',
        img_id: '6',
        imgSrc: '',
        imgLocalSrc: 'shirts/Creatures/007DUDE2.png',
      },
      {
        id: '26',
        product_id: '1',
        collection_id: '2',
        img_id: '7',
        imgSrc: '',
        imgLocalSrc: 'shirts/Creatures/010YAWNINGMAN.png',
      },
      {
        id: '27',
        product_id: '1',
        collection_id: '2',
        img_id: '8',
        imgSrc: '',
        imgLocalSrc: 'shirts/Creatures/011SCIENTIST.png',
      },
      {
        id: '28',
        product_id: '1',
        collection_id: '2',
        img_id: '9',
        imgSrc: '',
        imgLocalSrc: 'shirts/Creatures/014DAEMON.png',
      },
      {
        id: '29',
        product_id: '1',
        collection_id: '2',
        img_id: '10',
        imgSrc: '',
        imgLocalSrc: 'shirts/Creatures/021ROBOT3.png',
      },
      {
        id: '30',
        product_id: '1',
        collection_id: '2',
        img_id: '11',
        imgSrc: '',
        imgLocalSrc: 'shirts/Creatures/023ALIEN3.png',
      },
      {
        id: '31',
        product_id: '1',
        collection_id: '2',
        img_id: '12',
        imgSrc: '',
        imgLocalSrc: 'shirts/Creatures/024BEARDED2.png',
      },
      {
        id: '32',
        product_id: '1',
        collection_id: '2',
        img_id: '13',
        imgSrc: '',
        imgLocalSrc: 'shirts/Creatures/026ROBOT4.png',
      },
      //
      //Robots
      //
      {
        id: '33',
        product_id: '1',
        collection_id: '1',
        img_id: '1',
        imgSrc: '',
        imgLocalSrc: 'shirts/Robots/ОбретениеКосмическойЭнергии.png',
      },
      {
        id: '34',
        product_id: '1',
        collection_id: '1',
        img_id: '2',
        imgSrc: '',
        imgLocalSrc: 'shirts/Robots/СвятойРешатель.png',
      },
      {
        id: '35',
        product_id: '1',
        collection_id: '1',
        img_id: '3',
        imgSrc: '',
        imgLocalSrc: 'shirts/Robots/СоюзЦаряЛюдейИЦаряРоботов.png',
      },
      {
        id: '36',
        product_id: '1',
        collection_id: '1',
        img_id: '4',
        imgSrc: '',
        imgLocalSrc: 'shirts/Robots/СвятыеСоздатели.png',
      },
      {
        id: '37',
        product_id: '1',
        collection_id: '1',
        img_id: '5',
        imgSrc: '',
        imgLocalSrc: 'shirts/Robots/ВеликийВзвешиватель.png',
      },
      {
        id: '38',
        product_id: '1',
        collection_id: '1',
        img_id: '6',
        imgSrc: '',
        imgLocalSrc: 'shirts/Robots/СвятойСчислитель.png',
      },
      //
      // Блокноты
      //
      //Creatures
      //
      {
        id: '39',
        product_id: '6',
        collection_id: '2',
        img_id: '1',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Creatures/002ALIEN.png',
      },
      {
        id: '40',
        product_id: '6',
        collection_id: '2',
        img_id: '2',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Creatures/003DOG.png',
      },
      {
        id: '41',
        product_id: '6',
        collection_id: '2',
        img_id: '3',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Creatures/004ROBOT.png',
      },
      {
        id: '42',
        product_id: '6',
        collection_id: '2',
        img_id: '4',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Creatures/005GIRL.png',
      },
      {
        id: '43',
        product_id: '6',
        collection_id: '2',
        img_id: '5',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Creatures/006DUDE.png',
      },
      {
        id: '44',
        product_id: '6',
        collection_id: '2',
        img_id: '6',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Creatures/007DUDE2.png',
      },
      {
        id: '45',
        product_id: '6',
        collection_id: '2',
        img_id: '7',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Creatures/010YAWNINGMAN.png',
      },
      {
        id: '46',
        product_id: '6',
        collection_id: '2',
        img_id: '8',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Creatures/011SCIENTIST.png',
      },
      {
        id: '47',
        product_id: '6',
        collection_id: '2',
        img_id: '9',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Creatures/014DAEMON.png',
      },
      {
        id: '48',
        product_id: '6',
        collection_id: '2',
        img_id: '10',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Creatures/021ROBOT3.png',
      },
      {
        id: '49',
        product_id: '6',
        collection_id: '2',
        img_id: '11',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Creatures/023ALIEN3.png',
      },
      {
        id: '50',
        product_id: '6',
        collection_id: '2',
        img_id: '12',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Creatures/024BEARDED2.png',
      },
      {
        id: '51',
        product_id: '6',
        collection_id: '2',
        img_id: '13',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Creatures/024BEARDED2.png',
      },
      //
      //Robots
      //
      {
        id: '52',
        product_id: '6',
        collection_id: '1',
        img_id: '1',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Robots/ОбретениеКосмическойЭнергии.png',
      },
      {
        id: '53',
        product_id: '6',
        collection_id: '1',
        img_id: '2',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Robots/СвятойРешатель.png',
      },
      {
        id: '54',
        product_id: '6',
        collection_id: '1',
        img_id: '3',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Robots/СоюзЦаряЛюдейИЦаряРоботов.png',
      },
      {
        id: '55',
        product_id: '6',
        collection_id: '1',
        img_id: '4',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Robots/СвятыеСоздатели.png',
      },
      {
        id: '56',
        product_id: '6',
        collection_id: '1',
        img_id: '5',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Robots/ВеликийВзвешиватель.png',
      },
      {
        id: '57',
        product_id: '6',
        collection_id: '1',
        img_id: '6',
        imgSrc: '',
        imgLocalSrc: 'notebooks/Robots/СвятойСчислитель.png',
      },
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
    SELECTEDAIIMAGE: state => {
      return state.selectedAiImage
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
    },
    SET_SELECTEDAIIMAGE: (state, payload) => {
      state.selectedAiImage = payload;
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
    },
    UPDATE_SELECTEDAIIMAGE: async (context, payload) => {
      context.commit('SET_SELECTEDAIIMAGE', payload)
    }
  },
  modules: {
  }
})

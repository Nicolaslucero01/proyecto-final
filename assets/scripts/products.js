 const productsData = [
    {
      id: 1,
      nombre: 'Raqueta Babolat Aero Tour',
      precio: 84.000,
      imagen: './assets/img/raqueta01.jpg',
      category: 'Tenis'
    },

    {
        id: 2,
        nombre: 'Balls Babolat Gold Tubo X 3',
        precio: 4.400,
        imagen: './assets/img/pelotas01.jpg',
        category: 'Accesorios'
    },

    {
        id: 3,
        nombre: 'Paleta Tecnifibre Wall Breaker 375',
        precio: 144.300,
        imagen: './assets/img/paleta03.jpg',
        category: 'Padel'
    },   

  

    {
        id: 5,
        nombre: 'Raqueta Yonex Flame 98 2021',
        precio: 116.000,
        imagen: './assets/img/raqueta04.jpg',
        category: 'Tenis'
    },

   

   

    {
        id: 6,
        nombre: 'Paleta Adidas Adipower 3.2',
        precio: 217.800,
        imagen: './assets/img/paleta01.jpg',
        category: 'Padel'
    },

    

    {
        id: 7,
      nombre: 'Raqueta Tecnifibre TF X1 300',
      precio: 117.000,
      imagen: './assets/img/raqueta03.jpg',
      category: 'Tenis'
    },

    {
        id: 8,
        nombre: 'Paleta Head Zepyhr Pro 2022',
        precio: 109.000,
        imagen: './assets/img/paleta02.jpg',
        category: 'Padel'
    },


    {
        id: 9,
        nombre: 'Raquetero Wilson RF RH12',
        precio: 118.200,
        imagen: './assets/img/bolso02.jpg',
        category: 'Accesorios'
    },

   

    {
        id: 10,
        nombre: 'Balls Head Tour X3',
        precio: 5.700,
        imagen: './assets/img/pelotas03.jpg',
        category: 'Accesorios'
    },

    {
        id: 11,
        nombre: 'Raquetero Babolat AERO RH12',
        precio: 92.760,
        imagen: './assets/img/bolso01.jpg',
        category: 'Accesorios'
    },

    {
        id: 12,
        nombre: 'Balls Dunlop Fort All Court X3',
        precio: 5.150,
        imagen: './assets/img/pelotas02.jpg',
        category: 'Accesorios'
    },

  

    {
        id: 14,
        nombre: 'Paleta Vasquito R4',
        precio: 34.500,
        imagen: './assets/img/vasquito-r4.jpg',
        category: 'Pelota Paleta'
    },

    {
        id: 15,
        nombre: 'Paleta Dabber Titanium Carbono Kevlar 14mm',
        precio: 18.250,
        imagen: './assets/img/dabberkevlar.jpg',
        category: 'Pelota Paleta'
    },       

    {
      id: 16,
      nombre: 'Raqueta Head Speed MP 2022',
      precio: 126.000,
      imagen: './assets/img/raqueta02.jpg',
      category: 'Tenis'
    },

    {
        id: 17,
      nombre: 'Paleta Saquefort Kraken Special Carbono 15mm',
      precio: 126.000,
      imagen: './assets/img/saquefortKraken.jpg',
      category: 'Pelota Paleta'
    },

    {
        id: 17,
      nombre: 'Raqueta Rafael Nadal Pure Aero',
      precio: 126.000,
      imagen: './assets/img/RaquetaPureAero.jpg',
      category: 'Tenis'
    },



    


    
  ];


  const DivideProductsInParts = (size) =>{
    let productList = [];

    for(let i = 0; i < productsData.length; i+= size){
        productList.push(productsData.slice(i, i+size))
    }

    return productList
  }



const appState = {
  products: DivideProductsInParts(8),
  currentProductsIndex: 0,
  productsLimit: DivideProductsInParts(8).length,
  activeFilter: null,

}


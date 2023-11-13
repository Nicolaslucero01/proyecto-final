const productsData = [
  {
    id: 1,
    nombre: "Raqueta Babolat Boost Rafa",
    precio: "96.999",
    imagen: "./assets/img/BabolatBoostRafa.jpg",
    category: "Tenis",
  },

  {
    id: 2,
    nombre: "Balls Babolat Gold Tubo X 3",
    precio: "4.400",
    imagen: "./assets/img/BabolatGoldX3.jpg",
    category: "Pelotas",
  },

  {
    id: 3,
    nombre: "Paleta Tecnifibre Wall Breaker 375",
    precio: "155.999",
    imagen: "./assets/img/TFWallBreaker.jpg",
    category: "Padel",
  },

  {
    id: 4,
    nombre: "Paleta Guastavino Puly Villegas Doble Carbono 12mm",
    precio: "55.999",
    imagen: "./assets/img/guastavinoPuly.jpg",
    category: "Pelota Paleta",
  },

  {
    id: 5,
    nombre: "Camiseta Nike Court Dri-FIT Adv Rafa",
    precio: "56.999",
    imagen: "./assets/img/nikerafaadv.jpg",
    category: "Indumentaria",
  },

  {
    id: 6,
    nombre: "Raqueta Yonex Flame 98 2021",
    precio: "116.000",
    imagen: "./assets/img/YonexFlame98.jpg",
    category: "Tenis",
  },

  {
    id: 7,
    nombre: "Paleta Adidas Adipower 3.2",
    precio: "217.800",
    imagen: "./assets/img/AdidasAdiPower.jpg",
    category: "Padel",
  },

  {
    id: 8,
    nombre: "Raqueta Tecnifibre Tempo IGA SWIATEK",
    precio: "232.999",
    imagen: "./assets/img/TfTempoIGA.jpg",
    category: "Tenis",
  },

  {
    id: 9,
    nombre: "Paleta Head Zepyhr Pro 2022",
    precio: "109.000",
    imagen: "./assets/img/HeadZepyhrPro.jpg",
    category: "Padel",
  },

  {
    id: 10,
    nombre: "Raquetero Wilson RF RH12",
    precio: "118.200",
    imagen: "./assets/img/WilsonRFRH2.jpg",
    category: "Tenis",
  },

  {
    id: 11,
    nombre: "Balls Head Tour X3",
    precio: "5.700",
    imagen: "./assets/img/HeadTourX3.jpg",
    category: "Pelotas",
  },

  {
    id: 12,
    nombre: "Balls Head Tour X3",
    precio: "5.700",
    imagen: "./assets/img/babolatbagrafa.jpg",
    category: "Pelotas",
  },

  {
    id: 13,
    nombre: "Balls Dunlop Fort All Court X3",
    precio: "5.150",
    imagen: "./assets/img/DunlopFortAllCourtX3.jpg",
    category: "Pelotas",
  },

  {
    id: 14,
    nombre: "Paleta Vasquito R4",
    precio: "34.500",
    imagen: "./assets/img/vasquitor4.jpg",
    category: "Pelota Paleta",
  },

  {
    id: 15,
    nombre: "Paleta Dabber Titanium Carbono Kevlar 14mm",
    precio: "36.999",
    imagen: "./assets/img/dabbercarbonokevlar.jpg",
    category: "Pelota Paleta",
  },

  {
    id: 16,
    nombre: "Raqueta Head Speed MP 2022",
    precio: "126.000",
    imagen: "./assets/img/HeadSpeedMP.jpg",
    category: "Tenis",
  },

  {
    id: 17,
    nombre: "Paleta Saquefort Kraken Special Carbono 15mm",
    precio: "34.999",
    imagen: "./assets/img/saquefortKraken.jpg",
    category: "Pelota Paleta",
  },

  {
    id: 18,
    nombre: "Raqueta Rafael Nadal Pure Aero",
    precio: "279.900",
    imagen: "./assets/img/BabolatPureAero.jpg",
    category: "Tenis",
  },

  {
    id: 19,
    nombre: "Paleta Vasquito A1 Full Carbono 15mm",
    precio: "37.999",
    imagen: "./assets/img/vasquitoA1.jpg",
    category: "Pelota Paleta",
  },

  {
    id: 20,
    nombre: "Bolso Tecnifibre Tour Endourance 12R",
    precio: "138.999",
    imagen: "./assets/img/TourEndourance.jpg",
    category: "Tenis",
  },

  {
    id: 21,
    nombre: "Raqueta de Tenis Boca Juniors Ultra 100 V3",
    precio: "97.999",
    imagen: "./assets/img/wilsonbocajr.jpg",
    category: "Tenis",
  },

  {
    id: 22,
    nombre: "Pelota Rebo Color Blanco x3",
    precio: "11.999",
    imagen: "./assets/img/ReboBlanca.jpg",
    category: "Pelotas",
  },

  {
    id: 23,
    nombre: "Pelota Rebo Color Negro x3",
    precio: "8.999",
    imagen: "./assets/img/ReboNegra.jpg",
    category: "Pelotas",
  },

  {
    id: 24,
    nombre: "Polo de hombre Lacoste Tennis × Novak Djokovic estampado",
    precio: "49.999",
    imagen: "./assets/img/lacosteNovakBlue.jpg",
    category: "Indumentaria",
  },

  {
    id: 25,
    nombre: "Zapatiilas Court FF 3 Novak Clay",
    precio: "79.999",
    imagen: "./assets/img/zapatillasNovakClayRed.jpg",
    category: "Indumentaria",
  },

  {
    id: 26,
    nombre: "Raqueta Tecnifibre TF X1 300",
    precio: "117.000",
    imagen: "./assets/img/TFX1300.jpg",
    category: "Tenis",
  },
];

const DivideProductsInParts = (size) => {
  let productList = [];

  for (let i = 0; i < productsData.length; i += size) {
    productList.push(productsData.slice(i, i + size));
  }

  return productList;
};

const appState = {
  products: DivideProductsInParts(12),
  currentProductsIndex: 0,
  productsLimit: DivideProductsInParts(12).length,
  activeFilter: null,
};

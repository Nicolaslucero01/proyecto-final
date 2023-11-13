const productsContainer = document.querySelector('.products__cards')
const showMoreBtn = document.querySelector('.btn__loaded')
const categoriesList = document.querySelectorAll('.category')
const categoriesContainer = document.querySelector('.products__categories')




const createProductTemplate = (product) => {
    const { id, nombre, imagen, precio } = product;
    return `<div class="card">
    <div class="card__img">
      <img src="${imagen}" alt="${nombre}">
    </div>

    <div class="card__content">
      <h3>${nombre}</h3>
      <span>$${precio}</span>
    </div>

    <div class="card__buy">
      <button class="btn">
        COMPRAR
      </button>
    </div>
  </div>`;
  };


renderProducts = (productList) =>{
    productsContainer.innerHTML += productList.map(createProductTemplate).join("");
}


//Paginación


const isLastIndexOf = () => {
  return appState.currentProductsIndex === appState.productsLimit - 1;
};

const showMoreProducts = () => {
  appState.currentProductsIndex += 1;

  let { products, currentProductsIndex } = appState;

  renderProducts(products[currentProductsIndex]);

  if (isLastIndexOf()) {
    showMoreBtn.classList.add("hidden");
  }
};

const setShowMoreVisibility = () => {
  if (appState.activeFilter) {
    showMoreBtn.classList.add("hidden");
  } else {
    showMoreBtn.classList.remove("hidden");
  }
};

/* --------- Logica filtros ---------- */
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];

  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }

    categoryBtn.classList.add("active");
  });
};

const changeFiltersState = (btn) => {
  appState.activeFilter = btn.dataset.category;
  changeBtnActiveState(appState.activeFilter);
  setShowMoreVisibility(appState.activeFilter);
};

const renderFilteredProducts = () => {
  const filteredProducts = productsData.filter(
    (product) => product.category === appState.activeFilter
  );

  renderProducts(filteredProducts);
};

const applyFilter = ({ target }) => {
  if (!isInactiveFilterBtn(target)) return;
  changeFiltersState(target);
  productsContainer.innerHTML = "";
  if (appState.activeFilter) {
    renderFilteredProducts();
    appState.currentProductsIndex = 0;
    return;
  }
  renderProducts(appState.products[0]);
};

const isInactiveFilterBtn = (element) => {
  return (
    element.classList.contains("category") &&
    !element.classList.contains("active")
  );
};





//Menú Hamburguesa

function toggleMenu() {
  var navbarList = document.querySelector('.navbar__list');
  navbarList.classList.toggle('show');
}


//Init

const init = () =>{
  renderProducts(appState.products[0]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener("click", applyFilter)
};


init()

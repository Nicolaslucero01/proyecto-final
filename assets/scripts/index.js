const productsContainer = document.querySelector(".products__cards");
const showMoreBtn = document.querySelector(".btn__loaded");
const categoriesList = document.querySelectorAll(".category");
const categoriesContainer = document.querySelector(".products__categories");
const cartBtn = document.querySelector(".cart-label");
const menuBtn = document.querySelector(".menu-label");
const cartMenu = document.querySelector(".cart");
const barsMenu = document.querySelector(".navbar__list");
const cartBubble = document.querySelector(".cart-bubble");
const total = document.querySelector(".total");
const buyBtn = document.querySelector(".btn-buy");
const deleteBtn = document.querySelector(".btn-delete");
const productsCart = document.querySelector(".cart-container");
const successModal = document.querySelector(".add-modal");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const formatPrice = (price) => {
  // Verificar si el precio tiene centavos
  const hasCents = price % 1 !== 0;

  return (hasCents ? price.toFixed(2) : price.toString()) // Formatea con o sin decimales
    .replace(".", ",") // Cambia el punto por una coma para los decimales
    .replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Añade puntos para los miles
};

const createProductTemplate = (product) => {
  const { id, nombre, imagen, precio } = product;
  return `<div class="card">
    <div class="card__img">
      <img src="${imagen}" alt="${nombre}">
    </div>

    <div class="card__content">
      <h3>${nombre}</h3>
      <span>$${formatPrice(precio)}</span>
    </div>

    <div class="card__buy">
      <button class="btn" data-id='${id}' data-name="${nombre}" data-image="${imagen}" data-price="${precio}">
        Agregar al carrito
      </button>
    </div>
  </div>`;
};

renderProducts = (productList) => {
  productsContainer.innerHTML += productList
    .map(createProductTemplate)
    .join("");
};

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

//Carrito

const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    return;
  }
};

const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }
};

const createCartProductTemplate = (cartProduct) => {
  const { price, id, image, name, quantity } = cartProduct;

  return `
  <div class="cart-item">
            <img src="${image}" alt="${name}" />
            <div class="item-info">
              <h3 class="item-title">${name}</h3>
              <span class="item-price">$${formatPrice(price)}</span>
            </div>
            <div class="item-handler">
              <span class="quantity-handler down" data-id=${id}>-</span>
              <span class="item-quantity">${quantity}</span>
              <span class="quantity-handler up" data-id=${id}>+</span>
            </div>
          </div>
  `;
};

const renderCart = () => {
  if (cart) {
    productsCart.innerHTML = cart.map(createCartProductTemplate).join("");
  }
};

const getCartTotal = () => {
  return cart.reduce((acc, cur) => acc + Number(cur.price) * cur.quantity, 0);
};

// const showCartTotal = () => {
//   const totalAmount = getCartTotal();
//   const formatedTotal = totalAmount.toLocaleString("es-AR", {
//     style: "decimal",
//   });
//   total.innerHTML = `$${formatedTotal}`;
// };

const renderCartBuble = () => {
  cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0);
};

const disableBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
  } else {
    btn.classList.remove("disabled");
  }
};

const saveCartTotalInLocalStorage = () => {
  const totalAmount = getCartTotal();
  localStorage.setItem("cartTotal", totalAmount.toString());
};

const showCartTotal = () => {
  const cartTotal = localStorage.getItem("cartTotal");
  total.innerHTML = `$${formatPrice(cartTotal)}`;
};

//Funcion para actualizar el carro
const updateCartState = () => {
  saveCart();
  saveCartTotalInLocalStorage();
  renderCart();
  renderCartBuble();
  showCartTotal();
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
};

const addProduct = (e) => {
  if (!e.target.classList.contains("btn")) return;
  const product = e.target.dataset;

  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
    showSuccessModal("Se agrego una unidad nueva del producto");
  } else {
    createCardProduct(product);
    showSuccessModal("Porducto agregado al carrito");
  }

  updateCartState();
};

const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) =>
    cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct
  );
};

const isExistingCartProduct = (product) => {
  return cart.find((item) => item.id === product.id);
};

const createCardProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;

  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 1500);
};

const handlePlusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);
  addUnitToProduct(existingCartProduct);
};

const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);

  if (existingCartProduct.quantity === 1) {
    if (window.confirm("Deseas eliminar el producto?")) {
      removeProductCart(existingCartProduct);
    }
    return;
  }

  substractPorductUnit(existingCartProduct);
};

const substractPorductUnit = (existingCartProduct) => {
  cart = cart.map((product) => {
    return product.id === existingCartProduct.id
      ? { ...product, quantity: Number(product.quantity) - 1 }
      : product;
  });
};

const removeProductCart = (existingCartProduct) => {
  cart = cart.filter((product) => product.id !== existingCartProduct.id);
  updateCartState();
};

const handleQuantity = (e) => {
  if (e.target.classList.contains("up")) {
    handlePlusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("down")) {
    handleMinusBtnEvent(e.target.dataset.id);
  }

  updateCartState();
};

const resetCartItems = () => {
  cart = [];
  updateCartState();
};

const completeCartAction = (confirmMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
  }
};

const completeBuy = () => {
  completeCartAction("¿Deseas completar tu compra?");
};

const deleteCart = () => {
  completeCartAction("¿Deseas eliminar el carrito?");
};

//Init

const init = () => {
  renderProducts(appState.products[0]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener("click", applyFilter);

  cartBtn.addEventListener("click", toggleCart);
  menuBtn.addEventListener("click", toggleMenu);

  productsContainer.addEventListener("click", addProduct);
  productsCart.addEventListener("click", handleQuantity);
  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", (event) => {
    showCartTotal();
  });
  buyBtn.addEventListener("click", completeBuy);
  deleteBtn.addEventListener("click", deleteCart);

  disableBtn(deleteBtn);
  disableBtn(buyBtn);
  renderCartBuble(cart);
};

init();

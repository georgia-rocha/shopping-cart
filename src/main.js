import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { saveCartID, getSavedCartIDs } from './helpers/cartFunctions';
import './style.css';

const searchButton = document.querySelector('#search-products');
const inputSearch = document.querySelector('#products-input');
const sectionProducts = document.querySelector('.products');
const totalPrice = document.querySelector('.total-price');
const olCart = document.querySelector('.cart__products');
const cepInput = document.querySelector('.cep-input');
const buttonCep = document.querySelector('.cep-button.cart-button');
const cepSpan = document.querySelector('.cart__address');

buttonCep.addEventListener('click', async () => {
  cepSpan.innerText = await searchCep(cepInput.value);
});

const loading = document.createElement('h2');
loading.innerHTML = 'carregando...';
loading.className = 'loading';
sectionProducts.appendChild(loading);

async function addCart(id) {
  const dadosProduct = await fetchProduct(id);
  const criandoEle = createCartProductElement(dadosProduct);
  olCart.appendChild(criandoEle);
}

async function sumPrice() {
  const prices = await Promise.all(getSavedCartIDs()
    .map(async (id) => (await fetchProduct(id)).price));
  const total = prices.reduce((acc, curr) => acc + curr, 0);
  totalPrice.innerText = total;
}

olCart.addEventListener('click', async () => sumPrice());

const getProducts = async (value) => {
  try {
    const products = await fetchProductsList(value);

    sectionProducts.innerHTML = '';
    products.forEach((product) => {
      sectionProducts.appendChild(createProductElement(product));
    });

    const buttonCart = document.querySelectorAll('.product__add');

    buttonCart.forEach((button) => {
      button.addEventListener('click', async ({ target }) => {
        const { innerText } = target.parentElement.firstElementChild;
        await addCart(innerText);
        saveCartID(innerText);
        sumPrice();
      });
    });
  } catch (err) {
    const error = document.createElement('h2');
    error.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
    error.className = 'error';
    sectionProducts.appendChild(error);
  }
};

window.onload = async () => {
  await getProducts('computador');
  const salveProduct = getSavedCartIDs();
  salveProduct.forEach(async (id) => {
    await addCart(id);
  });
  await sumPrice();
};

searchButton.addEventListener('click', async () => {
  await getProducts(inputSearch.value);
});

import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { saveCartID, getSavedCartIDs } from './helpers/cartFunctions';
import './style.css';

const searchButton = document.querySelector('#search-products');
const inputSearch = document.querySelector('#products-input');
const sectionProducts = document.querySelector('.products');

const loading = document.createElement('h2');
loading.innerHTML = 'carregando...';
loading.className = 'loading';
sectionProducts.appendChild(loading);

document.querySelector('.cep-button').addEventListener('click', searchCep);
const olCart = document.querySelector('.cart__products');

async function addCart(id) {
  const dadosProduct = await fetchProduct(id);
  const criandoEle = createCartProductElement(dadosProduct);
  olCart.appendChild(criandoEle);
}

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
  console.log(salveProduct);
  salveProduct.forEach(async (id) => {
    await addCart(id);
  });
};

searchButton.addEventListener('click', async () => {
  await getProducts(inputSearch.value);
});

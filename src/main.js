import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const searchButton = document.querySelector('#search-products');
const inputSearch = document.querySelector('#products-input');
const sectionProducts = document.querySelector('.products');

const loading = document.createElement('h2');
loading.innerHTML = 'carregando...';
loading.className = 'loading';
sectionProducts.appendChild(loading);

document.querySelector('.cep-button').addEventListener('click', searchCep);
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
        await fetchProduct(innerText);
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
};

searchButton.addEventListener('click', async () => {
  await getProducts(inputSearch.value);
});

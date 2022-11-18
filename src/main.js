import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
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
  const products = await fetchProductsList(value);

  sectionProducts.innerHTML = '';
  /* console.log(products); */
  products.forEach((product) => {
    sectionProducts.appendChild(createProductElement(product));
  });
};

window.onload = async () => {
  await getProducts('computador');
};

searchButton.addEventListener('click', async () => {
  await getProducts(inputSearch.value);
});

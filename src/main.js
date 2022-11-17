import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

/* requisito 2 */

const searchButton = document.querySelector('#search-products');
const inputSearch = document.querySelector('#products-input');

document.querySelector('.cep-button').addEventListener('click', searchCep);

const getProducts = async (value) => {
  const products = await fetchProductsList(value);
  const sectionProducts = document.querySelector('.products');
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

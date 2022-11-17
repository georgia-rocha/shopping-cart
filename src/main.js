import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions.js';
import './style.css';

/* requisito 2 */

const searchButton = document.querySelector('#search-products');
const inputSearch = document.querySelector('#products-input');

document.querySelector('.cep-button').addEventListener('click', searchCep);
searchButton.addEventListener('click', async () => {
  /* console.log('computador'); */
  await fetchProductsList(inputSearch.value);
  
  const sectionProducts = document.querySelector('.products');
  const products = await fetchProductsList('computador');
  /* console.log(products); */
  products.forEach((product) => {
    const { id, title, thumbnail, price } = product;
    /* console.log({ id, title, thumbnail, price }); */
    sectionProducts.appendChild(createProductElement({ id, title, thumbnail, price }));
    })
  
});

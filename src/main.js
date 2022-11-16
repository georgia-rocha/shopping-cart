import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';

const searchButton = document.querySelector('#search-products');
const inputSearch = document.querySelector('#products-input');

document.querySelector('.cep-button').addEventListener('click', searchCep);
searchButton.addEventListener('click', async () => {
  console.log('computador');
  await fetchProductsList(inputSearch.value);
});

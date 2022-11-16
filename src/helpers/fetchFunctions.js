const API_ID = async (value) => fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`);

export const fetchProduct = () => {

};

export const fetchProductsList = async (value) => {
  if (value) {
    const response = await API_ID(value);
    const data = await response.json();
    return data.results;
  }
  throw new Error('Termo de busca não informado');
};

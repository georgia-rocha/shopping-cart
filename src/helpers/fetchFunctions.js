const API_ID = async (value) => fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`);
const product = async (id) => fetch(`https://api.mercadolibre.com/items/${id}`);

export const fetchProduct = async (id) => {
  try {
    const response = await product(id);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error('ID não informado');
  }
};

export const fetchProductsList = async (value) => {
  if (value) {
    const response = await API_ID(value);
    const data = await response.json();
    return data.results;
  }
  throw new Error('Termo de busca não informado');
};

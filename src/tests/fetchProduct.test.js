import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Teste se a fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('Testa se fetch foi chamada na função fetchProduct com o argumento do produto "MLB1405519561"', async () => {
    const argumento = "MLB1405519561";
    await fetchProduct(argumento)
    expect(fetch).toHaveBeenCalled();
  });
  it('Teste se, ao chamar a função fetchProduct com o argumento do produto pedido, a função fetch utiliza o endpoint pedido', async () => {
  const argumento = "MLB1405519561";
  const endPoint = "https://api.mercadolibre.com/items/MLB1405519561";
  await fetchProduct(argumento);
  expect(fetch).toHaveBeenCalledWith(endPoint);
  });
  it('Teste se o retorno da função fetchProduct com o argumento do produto pedido é uma estrutura de dados igual ao objeto produto que já está importado no arquivo', async () => {
    const argumento = "MLB1405519561";
    expect(await fetchProduct(argumento)).toEqual(product);
  });
  it('Teste se, ao chamar a função fetchProduct sem argumento, retorna um erro com uma mensagem', async () => {
  await expect(fetchProduct()).rejects.toThrow(
      new Error('ID não informado')
    )
  });
});

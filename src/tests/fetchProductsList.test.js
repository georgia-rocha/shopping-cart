import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    const argumento = 'computador';
    await fetchProductsList(argumento);
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    const argumento = 'computador';
    const endPoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProductsList(argumento);
    expect(fetch).toHaveBeenCalledWith(endPoint);

  });

  it('o retorno da função fetchProductsList é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const argumento = 'computador';
    expect(await fetchProductsList(argumento)).toEqual(computadorSearch);
  });

  it('ao chamar a função fetchProductsList sem argumento, retorna um erro com uma mensagem', async () => {
    await expect(fetchProductsList()).rejects.toThrow(
      new Error('Termo de busca não informado')
      );
  });
});

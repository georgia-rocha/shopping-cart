export const getAddress = (endPoint) => fetch(endPoint);

const maxLengthCep = 8;

export const searchCep = async (cep) => {
  const endPoint1 = `https://cep.awesomeapi.com.br/json/${cep}`;
  const endPoint2 = `https://brasilapi.com.br/api/cep/v2/${cep}`;

  try {
    if (cep.length !== maxLengthCep) {
      throw new Error('CEP inválido');
    }
    const response = await Promise.any([
      getAddress(endPoint1),
      getAddress(endPoint2),
    ]);
    const data = await response.json();
    if (!data.address) {
      throw new Error('CEP não encontrado');
    }
    return `${data.address} - ${data.district} - ${data.city} - ${data.state}`;
  } catch (err) {
    return 'CEP não encontrado';
  }
};

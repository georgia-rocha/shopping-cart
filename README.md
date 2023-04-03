![img](shoppingCart.gif)

# Para clonar e testar

1 - Clone o repositório com o comando **git clone**:

```
git clone git@github.com:georgia-rocha/shopping-cart.git
```

2 - Entre no diretório que acabou de ser criado:

```
cd shopping-cart
```

3 - Para o projeto funcionar na sua máquina, será necessário instalar suas dependências, para isso, utilize o comando **npm install**:

```
npm install
```

4 - Pronto, agora o projeto está pronto para ser rodado localmente, utilizando o comando **npm start** você poderá testar a aplicação:

```
npm start
```

# Objetivo

O presente projeto teve o intuito de colocar em prática os assuntos abordados na primeira sessão do módulo de Front-End em conjunto com o módulo de Fundamentos do curso da Trybe;

* HOFS - Higher Order Functions do JavaScript;
* JavaScript Assíncrono - Promise e fetch;
* Async, await e testes assíncros;

## O que foi desenvolvido?

Foi criado um carrinho de compras dinâmico, com dados consumidos diretamente de uma API com sua cobertura em testes e estilização com css bruto;

### Pontos a serem melhorados posteriormente:
  
  * Criar o carrinho de compras em uma outra page ou usar componentes, para que ele só apareça na tela caso o usuario queira, o que torna a aplicação mais simples para estilização e assim configura-la para mobile;
  

# 100% Requisitos Obrigatórios

- [x] 1. (TDD) Desenvolva testes de no mínimo 50% de cobertura das funções e linhas do arquivo `fetchFunctions`

- [x] 2. Implemente a função fetchProductsList

- [x] 3. Crie uma listagem de produtos

- [x] 4. Adicione um texto de `carregando` durante uma requisição à API

- [x] 5. Exiba uma mensagem de erro caso algo dê errado na requisição à API

- [x] 6. (TDD) Desenvolva testes de no mínimo 100% de cobertura das funções e linhas do arquivo `fetchFunctions`

- [x] 7. Implemente a função fetchProduct
o `id` do produto a ser buscado;

- [x] 8. Adicione o produto ao carrinho de compras

- [x] 9. Carregue o carrinho de compras ao iniciar a página

- [x] 10. Calcule o valor total dos itens do carrinho de compras

- [x] 11. Faça uma requisição a API de CEPs e exiba o endereço do CEP

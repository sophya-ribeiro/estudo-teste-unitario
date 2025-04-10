# 🧪 Dinâmica de Teste Unitário com Vitest

Este projeto foi desenvolvido como parte de uma dinâmica prática para fixar o conceito de **testes unitários** em JavaScript utilizando o framework [Vitest](https://vitest.dev/).

## 💡 Objetivo

Implementar um sistema básico de carrinho de compras com três funções principais, e então escrever **testes de unidade** para verificar se cada função está se comportando corretamente.

A ideia era exercitar o raciocínio de construção dos testes — tanto partindo da lógica e depois testando, quanto pensando no teste primeiro (TDD).

## 🛒 Funcionalidades implementadas

### Funções criadas:

- `add_item(carrinho, nome, preco)`  
  Adiciona um item ao carrinho, se for válido (nome não vazio e preço maior que zero).

- `remove_item(carrinho, nome)`  
  Remove o primeiro item com o nome correspondente do carrinho.

- `calcula_total(carrinho)`  
  Soma os preços de todos os itens e retorna o valor total com duas casas decimais.

## 🧪 Testes com Vitest

Foi utilizado o Vitest para escrever testes de unidade em arquivos com o padrão `.test.js`.

Os testes cobrem:

- Adição de itens válidos
- Tentativa de adicionar itens inválidos
- Remoção de itens do carrinho
- Cálculo do total dos itens no carrinho

## 🛠️ Como rodar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install

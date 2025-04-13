let estoque = [
  { nome: "Maçã", preco: 2.50 },
  { nome: "Banana", preco: 1.80 },
  { nome: "Laranja", preco: 2.20 },
  { nome: "Uva", preco: 3.75 },
  { nome: "Pera", preco: 2.90 },
  { nome: "Abacaxi", preco: 5.40 },
  { nome: "Morango", preco: 6.10 }
];

export function add_item(carrinho, nome, preco) {

  const item = { nome: nome, preco: preco }

  if (nome !== '' && preco !== '') {
    carrinho.push(item);
  }
  console.log(carrinho)
  return carrinho
}

export function remove_item(carrinho, nome) {

  const index = carrinho.findIndex(i => i.nome === nome)

  if (index !== -1) {
    carrinho.splice(index, 1)
    console.log(`Item "${nome}" removido.`)
  } else {
    console.log(`Item "${nome}" não encontrado.`)
  }
  return carrinho
}

export function calcula_total(carrinho) {
  let total = 0;
  for (let i = 0; i < carrinho.length; i++) {
    total += carrinho[i].preco
  }

  return total.toFixed(2)
}



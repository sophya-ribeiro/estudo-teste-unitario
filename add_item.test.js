import { expect, test } from 'vitest'
import { add_item } from './compras.js'

let lista = [
  { nome: "Maçã", preco: 2.50 },
  { nome: "Banana", preco: 1.80 },
  { nome: "Laranja", preco: 2.20 },
  { nome: "Uva", preco: 3.75 },
  { nome: "Pera", preco: 2.90 },
  { nome: "Abacaxi", preco: 5.40 },
  { nome: "Morango", preco: 6.10 }
]

test('adicionar item completo no carrinho vazio', () => {

  const carrinho = []

  add_item(carrinho, 'Maçã', 2.5)
  expect(carrinho[0]).toEqual({ nome: 'Maçã', preco: 2.5 })
})

test('adicionar item completo no carrinho cheio', (lista) => {
  const carrinho = [lista[0], lista[1]]

  add_item(carrinho, 'Maçã', 2.5)
  expect(carrinho[2]).toEqual({ nome: 'Maçã', preco: 2.5 })
})

test('adicionar item incompleto no carrinho vazio', () => {
  const carrinho = []

  add_item(carrinho, '', 2.5)
  expect(carrinho).toEqual([])
})

test('adicionar item incompleto no carrinho cheio', (lista) => {
  const carrinho = [lista[0], lista[1]]

  add_item(carrinho, "Maçã", '')
  expect(carrinho[2]).toBeUndefined()
})
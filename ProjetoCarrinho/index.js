console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require ('./database.js')

const { produtos } = db
// - Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior). Utilize a lista contida no arquivo `database.js`
produtos.sort((a ,b ) => a.preco - b.preco)

const read = require('readline-sync')
//- Receber via terminal as entradas de `id` e `quantidade` dos produtos a serem adquiridos.
const verProdutos = read.question (' você deseja encontrar produtos por categoria ? (S/N) ')
if(verProdutos.toLocaleUpperCase()==='S'){
  console.log('------------------------------------------------------------')
  console.log('essas são as categorias')
  console.log('alimento, informática,casa, higiene, bebida')
  console.log('------------------------------------------------------------')
  
}

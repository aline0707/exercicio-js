

//    use ("autores_e_livros");

// db.autor.insertMany([
//     {nome: "Machado de Assis", Nacionalidade: "Brasileiro"},
//     {nome: "George Orwell", Nacionalidade: "Britânico"},
//     {nome: "Clarice Lispector", Nacionalidade: "Brasileiro"},
//     {nome: "J.K.Rowling", Nacionalidade: "Britânico"},
//     {nome: "Gabriel Garcia Márquez", Nacionalidade: "Colombiano"}

// ])
// db.livro.insertMany([
//     {Titulo: "Dom Casmurro", Autor: "Machado de Assis", Ano: 1899},
//     {Titulo: 1984, Autor: "George Orwell", Ano: 1949},
//     {Titulo: "A Hora da Estrela", Autor: "George Orwell", Ano: 1949},
//     {Titulo: "Harry Potter", Autor: "J.K.Rowling", Ano: 1997},
//     {Titulo: "Cem Anos de solidão", Autor: "Gabriel Garcia Márquez", Ano: 1967}
    
// ])

// db.livro.updateOne({Titulo: "Harry Potter"},
//     {$set:{Ano: 1998}})
   
// db.autor.find({Nacionalidade: "Brasileiro"})

// db.autor.aggregate([
// {
//     $lookup: {
//       from: "livro",//onde esta a info
//       localField: "nome",//fiel (coluna) da tabela principal
//       foreignField: "Autor", //field (coluna) da tabela estrangeira
//       as: "info_Titulo"//onde vai ser exibido
//     }
// }
// ])


use ("clientes_pedidos")

// db.cliente.insertMany([
//     {nome:"Ana"  ,cidade: "São Paulo"},
//     {nome:"Bruno"  ,cidade: "Rio de Janeiro"},
//     {nome:"Carla"  ,cidade: "Belo Horizonte"},
//     {nome:"Daniel" ,cidade: "Curitiba"},
//     {nome:"Elisa"   ,cidade: "Porto Alegre"}
// ])

// db.pedido.insertMany([
//     {cliente: "Ana", produto: "Notebook", valor: 3500 },
//     {cliente: "Bruno", produto: "Celular ", valor: 1500 },
//     {cliente: "Carla", produto: "Tablet ", valor: 1200 },
//     {cliente: "Daniel", produto: "Monitor ", valor: 900 },
//      {cliente: "Elisa", produto: "Impressora", valor: 700 }

//     ])

//  db.pedido.updateOne({cliente: "Daniel"},
//      {$set:{valor: 950}})

// db.pedido.find({valor: {$gt: 100}})

//  db.cliente.aggregate([
// {
//     $lookup: {
//       from: "pedido",//onde esta a info
//       localField: "nome",//fiel (coluna) da tabela principal
//       foreignField: "cliente", //field (coluna) da tabela estrangeira
//       as: "info_cliente"//onde vai ser exibido
//     }
// }
// ])

use("filmes_autores_estudios")
 
// db.filme.insertMany([
//     {titulo:"O Grande Golpe", ano:2005, genero:"Ação", estudio:"CineMax"},
// {titulo:"Amor em Paris", ano:2010, genero:"Romance", estudio:"Lumière"},
// {titulo:"Mistério na Neve", ano:2018, genero:"Suspense", estudio:"CineMax"},
// {titulo:"Aventura Submarina", ano:2022, genero:"Aventura", estudio:"Oceanic"},
// {titulo:"O Código Perdido", ano:2015, genero:"Mistério", estudio:"Lumière"}
// ])
 
// db.ator.insertMany([
// {nome:"João Silva",idade:35,filme:"O Grande Golpe"},
// {nome:"Maria Costa",idade:28,filme:"Amor em Paris"},
// {nome:"Pedro Martins",idade:42,filme:"Mistério na Neve"},
// {nome:"Ana Ribeiro",idade:30,filme:"Aventura Submarina"},
// {nome:"Lucas Andrade",idade:33,filme:"O Código Perdido"}
// ])
 
// db.estudio.insertMany([
// {nome:"CineMax", sede:"São Paulo", fundado:1998},
// {nome:"Lumière", sede:"Rio de Janeiro", fundado:2005},
// {nome:"Oceanic", sede:"Recife", fundado:2012}
// ])
 
   db.ator.updateOne({filme: "O Código Perdido"},
     {$set:{genero:"Ação"}})

//  db.ator.find()


//  use('sala')

// db.sala.insertOne({
//     nome:"Paulo",
//     idade: 22,
//     curso: "Técnico em informática para Internerte"
// })
//db.sala.find()
// db.sala.insertMany([
//     {nome: "Eduardo", idade: 17, curso:"Enfermagem"},
//     {nome: "Gabriel", idade: 22, curso:"Estatica"},
//     {nome: "Pedro", idade: 18, curso:"Tst"},
//     {nome: "Victor", idade: 25, curso:"Enfermagem"}
// ])

// use('sala')


// db.aluno.updateMany(
//     {nome: "Gabriel"},
//     {$set: {Curso: TII}}
// )

// db.aluno.find({nome: "Gabriel"})
// db.aluno.insertOne({
//     nome: "Gabriel",
//     idade: 22,
//     cuso: "TST"
// })

//  db.aluno.find({nome: "Gabriel"})

//  db.aluno.updateOne({
//     {nome: "Gabriel", idade: }
//  })

// db.aluno.updateOne({
//  _id: ObjectId('68f03b7e08715e091db931cc') },
// {$set: { idade: 30}},
// { $unset: { idade: ''}}
// )

// db.aluno.updateOne(
//     {_id: ObjectId('68f03b7e08715e091db931cc')},
//     {$rename: {'cuso': 'curso'}}

// )

// db.aluno.find().sort({ idade: -1})
// db.alune.find().limit(3).sort({idade: -1})

//    { _id: ObjectId('68f03b7e08715e091db931cc')})


// use('agencia_espacial')

// db.alienigenas_turistas.insertMany([
//     {nome: "Zlorg", planeta_origem: "Nebulon-5", especie:"Lumifero", destino: "Saturno", humor: "Animado", numero_de_tentaculos: 4, gasto_medio: 230},
//     {nome: "Xyra", planeta_origem: "Glorptar", especie:"Gelatina Sentiente", destino: "Marte", humor: "Curioso", numero_de_tentaculos: 0, gasto_medio: 180},
//     {nome: "Bliptor", planeta_origem: "Kronix", especie:"Ciborgue Etéreo", destino: "Lua", humor: "Entediado", numero_de_tentaculos: 2, gasto_medio: 90},
//     {nome: "t'quinn", planeta_origem: "Vortex-12", especie:"Anfíbio Cósmico", destino: "Terra", humor: "Fascinado", numero_de_tentaculos: 6, gasto_medio: 320},
//     {nome: "Moolah", planeta_origem: "Zeltra", especie:"Felino Galáctico", destino: "Neturno", humor: "Sonolento", numero_de_tentaculos: 3, gasto_medio: 150},
    
    
// ])

// db.alienigenas_turistas.find({destino: "Marte"})
// db.alienigenas_turistas.find({humor: "Animado" })
// db.alienigenas_turistas.find({gasto_medio: {$gt: 200}})
// db.alienigenas_turistas.updateOne ({nome: "Bliptor", },{$set: {humor: "Empolgado" }} )
// db.alienigenas_turistas.find({nome: "Bliptor"})
// db.alienigenas_turistas.updateOne({nome: "t'quinn"},{$set:{gasto_medio: 400}})
//  db.alienigenas_turistas.find({nome: "t'quinn"})
// db.alienigenas_turistas.updateOne({nome: "Moolah"},{$set:{numero_de_tentaculos: 4}})
// db.alienigenas_turistas.find({nome: "Moolah"})
// db.alienigenas_turistas.find({numero_de_tentaculos: {$gte: 4}})
// db.alienigenas_turistas.find().sort({gasto_medio: 1}).limit(1);
// db.alienigenas_turistas.find().sort({destino: 1})



// db.planetas_catalogados.insertMany([
//     {nome: "Xyphos", sistema: "Helion", tipo:"Rochoso", possui_vida: "true", gravidade: 1.1, temperatura_media: 25},
//     {nome: "Glacia", sistema: "Crion", tipo:"Gelado", possui_vida: "false", gravidade: 0.8, temperatura_media: -120},
//     {nome: "Voltar", sistema: "Omega-3", tipo:"Vulcânico", possui_vida: "false", gravidade: 2.3, temperatura_media: 460},
//     {nome: "Aqualis", sistema: "Serpentis", tipo:"Oceânico", possui_vida: "true", gravidade: 1.0, temperatura_media: 18},
//     {nome: "Drunor", sistema: "Velkar", tipo:"Gasoso", possui_vida: "false", gravidade: 0.5, temperatura_media: 60},
// ])



//  use ("naves_exploradoras")
 
// db.naves_exploradoras.insertMany([
//     {nome: "Estrela Veloz", comandante:"Capitã Luna", destino:"Andrômeda", tripulantes:8, status:"Em missão", modelo: "GX-900", autonomia_dias: 120},
//     {nome: "Aurora Nebulosa", comandante:"Comandante Vork", destino:"Galáxia Sombria", tripulantes:5, status:"Em manutenção", modelo: "ZX-12", autonomia_dias: 80},
//     {nome: "Cometa Dourado", comandante:"Tenente Zog", destino:"Saturno", tripulantes:12, status:"Em missão", modelo: "TX-77", autonomia_dias: 150},
//     {nome: "Eclipse Rubro", comandante:"Capitão Blork", destino:"Buraco Negro Beta", tripulantes:3, status:"Perdida", modelo: "RX-404", autonomia_dias: 60},
//     {nome: "Lótus Cósmica", comandante:"Dra. Kora", destino:"Terra", tripulantes:10, status:"Em reparos", modelo: "NX-222", autonomia_dias: 100}
// ])



 use ("robos_de_exploracao")
 
// db.robos_de_exploracao.insertMany([
//     {codigo: "RBX-01", modelo: "RoverMax", planeta_destino: "Marte", status: "Ativo", bateria: 87, amostras_coletadas: 45},
//     {codigo: "ZY-22", modelo: "GeoProbe", planeta_destino: "Europa", status: "Em reparo", bateria: 43, amostras_coletadas: 22},
//     {codigo: "ALN-7", modelo: "ScanBot", planeta_destino: "Netuno", status: "Desativado", bateria: 0, amostras_coletadas: 60},
//     {codigo: "GR-9", modelo: "DeepMiner", planeta_destino: "Vênus", status: "Ativo", bateria: 65, amostras_coletadas: 38},
//     {codigo: "PX-5", modelo: "Atmoscan", planeta_destino: "Titã", status: "Ativo", bateria: 91, amostras_coletadas: 52}
// ])

// use("eventos_cosmicos")
// db.eventos_cosmicos.insertMany([
//      {nome_evento: "Fúria Solar Alpha", tipo: "Tempestade Estelar", localizacao:"Sistema Helion", intensidade: "Extrema", data_observacao: 2125-06-12 , registrado_por:" Dr. Zark"},

//      {nome_evento: "Eclipse Quântico", tipo: "Eclipse", localizacao:"Nebulosa Orion", intensidade: "Alta", data_observacao: 2126-01-28 , registrado_por:"Dra. Mira"},

//      {nome_evento: "Explosão Prisma Azul", tipo: "Supernova", localizacao:"Galáxia Centauri", intensidade: "Média", data_observacao: 2125-11-04, registrado_por:"Dr. Vorn"},

//      {nome_evento: "Chuva de Cristais", tipo: "Meteoro", localizacao:"Setor z-88", intensidade: "Baixa", data_observacao: 2125-03-09 , registrado_por:"Tenente Lira"},

//      {nome_evento: "Buraco Branco Épsilon", tipo: "Fenômeno", localizacao:"Andrômeda", intensidade: "Extrema", data_observacao: 2124-09-22 , registrado_por:"Dr. Krohn"},
// ])

// db.naves_exploradoras.find({status: "Em missão"})

// db.naves_exploradoras.find({autonomia_dias: ($gt: 100)},
// {modelo: 0, comandante: 0, tripulantes: 0, status: 0}
// )
// db.naves_exploradoras.updateOne({nome: "Eclipse Rubro"},{$set:{status: "Resgatada"}})
// db.naves_exploradoras.find({nome: "Eclipse Rubro"})

// db.naves_exploradoras.find({nome: "Aurora Nebulosa"})

// db.robos_de_exploracao.find({status: "Ativo"})

//  db.robos_de_exploracao.find({amostras_coletadas: ($gt: 40)},
//  {modelo: 0, planeta_destino: 0, status: 0}
//  )
    db.robos_de_exploracao.updateOne({bateria: 100})




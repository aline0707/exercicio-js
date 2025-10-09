// const timesBrasileirao2025 = [
//   "Atlético Mineiro",
//   "Atlético Paranaense",
//   "Bahia",
//   "Botafogo",
//   "Bragantino",
//   "Corinthians",
//   "Coritiba",
//   "Cruzeiro",
//   "Cuiabá",
//   "Flamengo",
//   "Fluminense",
//   "Fortaleza",
//   "Grêmio",
//   "Internacional",
//   "Juventude",
//   "Palmeiras",
//   "Santos",
//   "São Paulo",
//   "Vasco da Gama",
//   "Vitória"
// ];

// console.dir(times)
const timesECidades = [
  { nome: "Atlético Mineiro", cidade: "Belo Horizonte - MG" },
  { nome: "Athletico Paranaense", cidade: "Curitiba - PR" },
  { nome: "Bahia", cidade: "Salvador - BA" },
  { nome: "Botafogo", cidade: "Rio de Janeiro - RJ" },
  { nome: "Bragantino", cidade: "Bragança Paulista - SP" },
  { nome: "Corinthians", cidade: "São Paulo - SP" },
  { nome: "Coritiba", cidade: "Curitiba - PR" },
  { nome: "Cruzeiro", cidade: "Belo Horizonte - MG" },
  { nome: "Cuiabá", cidade: "Cuiabá - MT" },
  { nome: "Flamengo", cidade: "Rio de Janeiro - RJ" },
  { nome: "Fluminense", cidade: "Rio de Janeiro - RJ" },
  { nome: "Fortaleza", cidade: "Fortaleza - CE" },
  { nome: "Grêmio", cidade: "Porto Alegre - RS" },
  { nome: "Internacional", cidade: "Porto Alegre - RS" },
  { nome: "Juventude", cidade: "Caxias do Sul - RS" },
  { nome: "Palmeiras", cidade: "São Paulo - SP" },
  { nome: "Santos", cidade: "Santos - SP" },
  { nome: "São Paulo", cidade: "São Paulo - SP" },
  { nome: "Vasco da Gama", cidade: "Rio de Janeiro - RJ" },
  { nome: "Vitória", cidade: "Salvador - BA" }
];
function fnListaTimes(){
    document.getElementById("lista_times").innerHTML = 
    <div class ="col-6 border text_center">${times[0]} -${cidadesTimes[0]}</div> 
}
fnListaTimes()
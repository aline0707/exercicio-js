let numeroDeVagas =[]
let veiculos = []

function fnSalvarVeiculo(){
numeroDeVagas.push(document.getElementById("numero_vaga").value)
veiculos.push(document.getElementById("veiculo").value)

}

function fnListarVeiculos(){

    document.getElementById("tabela-veiculo").innerHTML = ""
    for(let i = 0; i < veiculos.length; i++){
        document.getElementById("tabela-veiculo").innerHTML += `<tr>`
       document.getElementById("tabela-veiculo").innerHTML += `<td> ${numeroDeVagas[i]} </td><td> ${veiculos[i]}</td>`   
     document.getElementById("tabela-veiculo").innerHTML += `</tr>`
    }


    // let i = 0
    // while(i < veiculos.length){
    //     console.log(veiculos[i], numeroDeVagas[i])
    //     i++
    // }
    
    //for(declaração contador; condição; incremento){}
    // for(let i = 0; i < veiculos.length; i++){
    //     console.log(veiculos[i], numeroDeVagas[i])
   // }

// console.dir(numeroDeVagas)
//console.dir(veiculos)
}

function fnLimpar(){
  
}
function fnVerificarPeriodo(){
   let periodoSelecionado = document.getElementById("periodo").value

   //document.getElementById("resposta").innerText = periodoSelecionado
    if(periodoSelecionado == "m"){
        document.getElementById("resposta").innerText = "Manhã 🌞"
        document.body.style.background = "#f0da12"
        document.body.style.color = "#030303"
        document.getElementById("foto").src="imagem/manhã.gif"
        
    }else if(periodoSelecionado == "t"){
       document.getElementById("resposta").innerText = "Tarde 🌤️" 
       document.body.style.background = "#f38f1c"
        document.body.style.color = "#030303 "
        document.getElementById("foto").src="imagem/tarde.gif"

    }else if(periodoSelecionado == "n"){
       document.getElementById("resposta").innerText = "Noite 🌙" 
        document.body.style.background = "#060d50"
        document.body.style.color = "#faf3f3 "
        document.getElementById("foto").src="imagem/noite.webp"
} else{
  document.getElementById("resposta").innerText = "" 
   document.body.style.background = "#8cb0df"
        document.body.style.color = "#030303 " 
        document.getElementById("foto").src="imagem/original.webp"
}

}
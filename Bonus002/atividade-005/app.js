document.getElementById('bt-calcular').addEventListener('click', function(){
    let salario = document.getElementById('salario').value
    let horasTrabalhadas = parseFloat(document.getElementById('horas-trabalhadas').value)
    let cargaHoraria = document.getElementById('carga-horaria').value
    let horasExtras = fnHorasExtras(salario, horasTrabalhadas, cargaHoraria)
    document.getElementById('resposta').innerHTML = fnformatarMonetario(horasExtras)
})


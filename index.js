
document.getElementById('restar').addEventListener('click', function() {
    let numeroA = document.getElementById('numero1').value;
    console.log('El valor del numeroA es ' +numeroA)
    let numeroB = document.getElementById('numero2').value;
    console.log('El valor del numeroB es ' +numeroB)
    let resultado = restar(parseInt(numeroA),parseInt(numeroB));
    console.log('La edad actual es ' +resultado)


document.getElementById('resultado').innerHTML = resultado
document.getElementById('contenedorresultado').style.display = 'block';
    

});

function restar(a,b) {
    return a-b

}

document.getElementById('boton').onclick = function () {
    document.getElementById("demo").innerHTML = "Universitaria Graduada / Licenciada en Recursos Humanos";      
    }

function myFunction() {
    document.getElementById("experiencia").innerHTML = "Empresa: Supermercados Día, Período: 6/2010-8/2012, Puesto: Repositora";
      }

      
      
      

      
    
  
  
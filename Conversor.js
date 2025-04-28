const RESULTADO = document.getElementById("resultado");
const BOTON = document.getElementById("converter");
const NUMERO = document.getElementById("numero");
const BINXDEC = ['0', '1', '10', '11', '100', '101', '110', '111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111'];

BOTON.addEventListener("click", function() {
    RESULTADO.innerHTML = "";//Limpar o resultado anterior
 
  /*  const RADIOS = document.querySelectorAll('input[name="base1"]');//Base1
    const RADIOS2 = document.querySelectorAll('input[name="base2"]');//Base2
    let Selecionado1 = null;
    let Selecionado2 = null;
    
    RADIOS.forEach((radio) => {// Seletor de base1
        if (radio.checked) {
            Selecionado1 = radio.value;
        }
    } );
    RADIOS2.forEach((radio) => {// Seletor de base2
        if (radio.checked) {
            Selecionado2 = radio.value;
        }
    } );

    if (Selecionado1 == null || Selecionado2 == null) {
        alert("Selecione uma base de conversão");
    }else if (Selecionado1 == Selecionado2) {
        alert("Selecione outra base de conversão");
    }else{
        RESULTADO.innerHTML = "Conversão: " + Selecionado1 + " X " + Selecionado2;
    }
*/
    /* Conversão de decimal para binário por tabulação
    let digitos = String(NUMERO.value).split('').map(Number);
    console.log(digitos);
    
    for (let i = 0; i < digitos.length; i++) {
      console.log(BINXDEC[digitos[i]]);
    }*/

     /* // Conversão de decimal para binário dividindo por 2
      let deCimal = NUMERO.value;//pegar o valor do input
      let biNario = "";//variável para armazenar o resultado da conversão

      for (var i = 0; deCimal > 0; i++) {
          let residuo = deCimal % 2;//calcular o resto da divisão
          biNario = residuo + biNario;//concatenar o resto na variável binário
          deCimal = Math.floor(deCimal / 2);//arredondar para baixo
          RESULTADO.innerHTML = biNario;
      }*/

    // Conversão de binario para decimal
    let bInario = NUMERO.value;//pegar o valor do input
    
})

 
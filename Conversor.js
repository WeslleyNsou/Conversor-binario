const RESULTADO = document.getElementById("resultado");
const BOTON = document.getElementById("converter");
const NUMERO = document.getElementById("numero");
const BINXDEC = ['0', '1', '10', '11', '100', '101', '110', '111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111'];

BOTON.addEventListener("click", function() {
    const RADIOS = document.querySelectorAll('input[name="base1"]');//Base1
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

})


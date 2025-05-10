const RESULTADO = document.getElementById("resultado");
const BOTON = document.getElementById("converter");
const NUMERO = document.getElementById("numero");
const BINHEX = ['0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111'];

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

      for (let i = 0; deCimal > 0; i++) {
          let residuo = deCimal % 2;//calcular o resto da divisão
          biNario = residuo + biNario;//concatenar o resto na variável binário
          deCimal = Math.floor(deCimal / 2);//arredondar para baixo
          RESULTADO.innerHTML = biNario;
      }*/

 /*// Conversão de binario para decimal
    let bInario = NUMERO.value;//pegar o valor do input
    let dEciMal = 0;//variável para armazenar o resultado da conversão

    for (let i = 0; i < bInario.length; i++) {
        let digito = bInario.charAt(i);//pegar o dígito da posição i
        let potencia = Math.pow(2, bInario.length - 1 - i);//calcular a potência de 2
        let resultado = digito * potencia;//multiplicar o dígito pela potência de 2
        dEciMal += resultado;//somar o resultado na variável decimal
        RESULTADO.innerHTML = dEciMal;//exibir o resultado na tela
    }
    */
    
    //Conversão de decimal para hexadecimal
   /* let deCimal = NUMERO.value;//pegar o valor do input
    let hexaDecimal = [];//variável para armazenar o resultado da conversão
    for (let i = 0; deCimal > 0; i++){
        let residuo = deCimal % 16;//calcular o resto da divisão
        if (residuo <9) {
            hexaDecimal = residuo + hexaDecimal;//concatenar o resto na variável hexadecimal
        }else{
            switch (residuo) {
                case 10:
                    hexaDecimal = "A" + hexaDecimal;//concatenar o resto na variável hexadecimal
                    break;
                case 11:
                    hexaDecimal = "B" + hexaDecimal;//concatenar o resto na variável hexadecimal
                    break;
                case 12:
                    hexaDecimal = "C" + hexaDecimal;//concatenar o resto na variável hexadecimal
                    break;
                case 13:
                    hexaDecimal = "D" + hexaDecimal;//concatenar o resto na variável hexadecimal
                    break;
                case 14:
                    hexaDecimal = "E" + hexaDecimal;//concatenar o resto na variável hexadecimal
                    break;
                case 15:
                    hexaDecimal = "F" + hexaDecimal;//concatenar o resto na variável hexadecimal
                    break;
            }
        }
        deCimal = Math.floor(deCimal / 16);//arredondar para baixo
        RESULTADO.innerHTML = hexaDecimal ;//exibir o resultado na tela
    }
    */
   /*
    //Conversão de hexadecimal para decimal
    let hexaDecimal = NUMERO.value;//pegar o valor do input
    let digiHexa = hexaDecimal.split('');//separar os dígitos
    let Decimal = 0;//variável para armazenar o resultado da conversão

    for (let i = 0; i < digiHexa.length; i++) {
        let digitos = digiHexa[i];//pegar o dígito da posição i
        switch (digitos) {//verificar se o dígito é A, B, C, D, E ou F
            case "A":
                digitos = 10;//atribuir o valor 10
                break;
            case "B":
                digitos = 11;//atribuir o valor 11
                break;
            case "C":
                digitos = 12;//atribuir o valor 12
                break;
            case "D":
                digitos = 13;//atribuir o valor 13
                break;
            case "E":
                digitos = 14;//atribuir o valor 14
                break;
            case "F":
                digitos = 15;//atribuir o valor 15
                break;
        }
        let potencia = Math.pow(16, digiHexa.length - 1 - i) * digitos;//calcular a potência de 16
        Decimal += potencia;//somar o resultado na variável decimal
        RESULTADO.innerHTML = Decimal;//exibir o resultado na tela
    }
    */
    /*    //Conversão de Decimal para octal
    let deCimal = NUMERO.value;//pegar o valor do input  
    let octal = "";//variável para armazenar o resultado da conversão

    for (let i = 0; deCimal > 0; i++){
        let residuo = deCimal % 8;
        octal = residuo + octal;
        deCimal = Math.floor(deCimal / 8);
        RESULTADO.innerHTML = octal;

    }
    */
   /*
    //Conversão de octal para decimal
    let octal = NUMERO.value;
    let digOctal = octal.split('');
    let Decimal = 0;
    
    for (let i = 0 ; i < digOctal.length; i++){
        let digitos = digOctal[i];
        let potencia = Math.pow(8, digOctal.length - 1 - i);
        let multiplicar = digitos * potencia;
        Decimal += multiplicar;
        //Como a variavel Decimal ja esta definida como 0, ou seja como um numero, ela ira somar os valores resultantes da variavel
        multiplicar, mas se Decimal fosse definido como "", seria uma string e os valores de multiplicar seriam concatenados e não somados
        RESULTADO.innerHTML = Decimal;
    }
    */

    //Conversão de binário para hexadecimal
    let binario = NUMERO.value;
    let digBinario = binario.split('');

    if (digBinario.length % 4 != 0) {
        let zeros = 4 - (digBinario.length % 4);
        for (let i = 0; i < zeros; i++) {
            digBinario.unshift(0);
            let binario = digBinario.join('');//juntar os digitos em uma string e retornar o valor para digBinario
            
            let hexaDecimal = [];//variável para armazenar o resultado da conversão
        }
    }


});

 
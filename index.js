function gos() {
    var valueInput = document.getElementById('num').value;
    alert(valueInput);
}

/*=========================================================================*/

function go() {
    var a = document.getElementById('num-a').value;
    var b = document.getElementById('num-b').value;
    var c = a;
    var a = b;
    var b = c;
    document.getElementById('num-a-b').value = a;
    document.getElementById('num-b-a').value = b;
}

/*=========================================================================*/

function somamedia() {
    var idade1 = parseInt(document.querySelector('#idade1').value);
    var idade2 = parseInt(document.querySelector('#idade2').value);
    var soma = idade1 + idade2;
    var media = soma / 2;
    document.getElementById('soma').value = soma;
    document.getElementById('media').value = media;
}

/*=========================================================================*/

function calculation() {
    var a = parseInt(document.querySelector('#value1').value);
    var b = parseInt(document.querySelector('#value2').value);
    var selectOperation = document.querySelector('input[name="operation"]:checked').value;
    var nameOperation, calculo;
    if (selectOperation == 'adicao') {
        nameOperation = 'Adição';
        calculo = a + b;
    }
    else if (selectOperation == 'subtracao') {
        nameOperation = 'Subtração';
        calculo = a - b;
    }
    else if (selectOperation == 'multiplicacao') {
        nameOperation = 'Multiplicação';
        calculo = a * b;
    }
    else {
        nameOperation = 'Divisão';
        calculo = a / b;
    }
    document.getElementById('resultado').value = calculo;
}

/*=========================================================================*/

function calculo(){
    var temp = document.querySelector('#temperatura').value;
    var result = (temp * 1.8) + 32;
    document.getElementById('tempu').value = result;
}
var Calculadora = {
    ADICAO:'+',
    SUBTRACAO: '-',
    DIVISAO:'/',
    MULTIPLICACAO: '*',

    adicionar: function(num1, num2) {
        return Calculadora.calcular(num1, num2, Calculadora.ADICAO);
    },
    subtrair: function(num1, num2) {
        return Calculadora.calcular(num1, num2, Calculadora.SUBTRACAO);
    },
    dividir: function(num1, num2) {
        if (num2 == 0) {return 'Erro';}
        return Calculadora.calcular(num1, num2, Calculadora.DIVISAO);
    },
    multiplicar: function(num1, num2) {
        return Calculadora.calcular(num1, num2, Calculadora.MULTIPLICACAO);
    },

    calcular: (num1, num2, ope) => {
        var result = 0;
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (isNaN(num1) || isNaN(num2)) {
            return 0
        }

        switch (ope) {
            case Calculadora.ADICAO:
             result = num1 + num2;
             break;
            case Calculadora.SUBTRACAO:
             result = num1 - num2;
             break;
            case Calculadora.DIVISAO:
             result = num1 / num2;
             break;
            case Calculadora.MULTIPLICACAO:
             result = num1 * num2;
             break; 
            default:
             result = 0;
             break;
        }

        return result;
    }
};

//usado na função require do NodeJs
if (typeof module != 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Calculadora;
} 
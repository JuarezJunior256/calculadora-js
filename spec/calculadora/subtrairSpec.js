describe("suite de teste de subtração", () => {
    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 5 para 8 e 3 ', () => {
        expect(Calculadora.subtrair(8,3)).toEqual(5);
    });

    it('deve retorna 5 para 8 e 3 no formato texte', () => {
        expect(Calculadora.subtrair('8','3')).toEqual(5);
    });

   it('deve retorna 4 pra 5.5 e 1.5', () => {
        expect(Calculadora.subtrair(5.5,1.5)).toEqual(4);
   });
    
   it('deve retorna 0 quando valor 1 não for numerico', () => {
        expect(Calculadora.subtrair(undefined, 10)).toEqual(0);
   });

    it('deve retorna 0 quando valor 2 não for numerico', () => {
        expect(Calculadora.subtrair(10, undefined)).toEqual(0);
    })
});
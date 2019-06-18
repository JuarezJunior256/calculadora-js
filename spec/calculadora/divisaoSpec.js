describe("suite de teste de divisão", () => {
    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 4 para 8 e 2 ', () => {
        expect(Calculadora.dividir(8,2)).toEqual(4);
    });

    it('deve retorna 4 para 8 e 2 no formato texte', () => {
        expect(Calculadora.dividir('8','2')).toEqual(4);
    });

   it('deve retorna 1.5 pra 3 e 2', () => {
        expect(Calculadora.dividir(3,2)).toEqual(1.5);
   });
    
   it('deve retorna 0 quando valor 1 não for numerico', () => {
        expect(Calculadora.subtrair(undefined, 10)).toEqual(0);
   });

    it('deve retorna 0 quando valor 2 não for numerico', () => {
        expect(Calculadora.subtrair(10, undefined)).toEqual(0);
    })
});
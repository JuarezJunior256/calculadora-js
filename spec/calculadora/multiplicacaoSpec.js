describe("suite de teste de divisão", () => {
    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 4 para 2 e 2 ', () => {
        expect(Calculadora.multiplicar(2,2)).toEqual(4);
    });

    it('deve retorna 16 para 8 e 2 no formato texte', () => {
        expect(Calculadora.multiplicar('8','2')).toEqual(16);
    });

   it('deve retorna 3.5 pra 3 e 1.5', () => {
        expect(Calculadora.multiplicar(3,1.5)).toEqual(4.5);
   });
    
   it('deve retorna 0 quando valor 1 não for numerico', () => {
        expect(Calculadora.multiplicar(undefined, 10)).toEqual(0);
   });

   it('deve retorna 0 quando valor 2 não for numerico', () => {
        expect(Calculadora.multiplicar(10, undefined)).toEqual(0);
   })
});
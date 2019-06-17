describe("suite de teste de adição", () => {
    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 5 para 2 e 3 ', () => {
        expect(Calculadora.adicionar(2,3)).toEqual(5);
    });

    it('deve retorna 6 para 9 e -3 no formato texte', () => {
        expect(Calculadora.adicionar('9','-3')).toEqual(6);
    });

    it('deve retorna 4.5 pra 1.5 e 3', () => {
        expect(Calculadora.adicionar(1.5,3)).toEqual(4.5);
    });
    
    it('deve retorna 0 quando valor 1 não for numerico', () => {
        expect(Calculadora.adicionar(undefined, 10)).toEqual(0);
    });

    it('deve retorna 0 quando valor 2 não for numerico', () => {
        expect(Calculadora.adicionar(10, undefined)).toEqual(0);
    })
});
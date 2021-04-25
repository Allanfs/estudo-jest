const $ = require('jquery')
const rewire = require('rewire')
const carregar = rewire('../../main/dom/carregar');


describe('testar código nao exportado com rewire', () => {

    beforeAll(() => {
        // com o rewire obtem-se um atributo do script
        index = carregar.__get__('index')($)

        document.body.innerHTML = `
        <button id='click'>Incrementar</button>
        <span id='val'></span>
        `;
    })

    test('incrementar o valor presente em #id', () => {
    
        index.incrementar();
        index.incrementar();
    
        expect(document.getElementById('val').innerHTML).toBe("2")
    });

    test('clicar em #click não incrementa o valor (ainda nao sei o motivo)', () => {
    
        document.getElementById('click').click()
        document.getElementById('click').click()
        document.getElementById('click').click()
    
        expect(document.getElementById('val').innerHTML).toBe("2")
    });
})
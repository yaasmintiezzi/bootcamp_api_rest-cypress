/// <reference types = "cypress"/>

describe ('Buscar dispositivos',() => {

    it('Buscar dispositivo específico', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/6',
        })
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.status).to.exist
                expect(response.body.name).to.equal("Apple AirPods")
                expect(response.body.id).to.equal("6")
            })
    });

    it('Buscar todos os dispositivos', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects',
        })
            .then((response) => {
                response.body.forEach(lista => {
                    expect(lista).to.have.property('id')
                    expect(lista).to.have.property('name')
                    expect(lista).to.have.property('data')
                });
         })
    });
})

// describe é a nossa funcionalidade, ele tem 2 parâmetros
// o primeiro um texto e o segundo a função anonima executável (nossos cenários - cada it)
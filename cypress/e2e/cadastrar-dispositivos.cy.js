/// <reference types = "cypress"/>

describe ('Buscar dispositivos',() => {

    it('Cadastrar dispositivo com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: {
                "name": "Apple Yas 01",
                "data": {
                   "year": 2019,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                }
             }
        })
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.status).to.exist
                expect(response.body.name).to.equal("Apple Yas 01")
            })
    });

})


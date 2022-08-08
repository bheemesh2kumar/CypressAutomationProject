/// <reference types="Cypress" />

describe('get all products testing', () => {



    it('get all products', () => {
        // cy.intercept('GET', '/products').as('test1')
        // cy.wait('@test1').then(intercept => {
        //     cy.log(intercept.request.url)
        //     cy.log(intercept.request.headers)
        // })

        cy.request({
            method: 'GET',
            url: 'http://localhost:3030/products',
            headers: {
                'Accept': "application/json"
            }

        }).then((res) => {
            expect(res.status).to.eq(200)
        })




    })





})

/// <reference types= "Cypress" />

describe('validation of zoopla login page',()=>{
    it('validate zoopla login page title',()=>{
        cy.visit('https://www.zoopla.co.uk/')
        cy.title().should('eq', 'Zoopla > Search Property to Buy, Rent, House Prices, Estate Agents')
        
    })
})

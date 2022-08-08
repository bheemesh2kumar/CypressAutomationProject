/// <reference types="Cypress" />

class ZooplaSigninPage {


    visitTOUrl() {
        cy.visit("https://www.zoopla.co.uk/")
    }

    clickToLogin() {
        cy.get("#__next > header > div > div > nav > div.PJLV.PJLV-ieDcChf-css > div > ul > li:nth-child(3) > a > span")
            .click()
        cy.get("#email").clear().type("manu.bheemesh@gmail.com")
        cy.get("#password").clear().type("@satyarao1")
        cy.wait(3000)
        cy.get("#main-content > div > div > form > button").click()

    }



}

export default ZooplaSigninPage
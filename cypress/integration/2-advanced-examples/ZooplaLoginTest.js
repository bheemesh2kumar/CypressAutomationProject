/// <reference types= "Cypress" />
import ZooplaSigninPage from '../PageObjects/ZooplaSigninPageObjects'

describe('Testing zoopla if user is able to loginto application', () => {



    it('testing if user logs into application', () => {

        const zooplapage = new ZooplaSigninPage();
        zooplapage.visitTOUrl()
        zooplapage.clickToLogin()


    })
})
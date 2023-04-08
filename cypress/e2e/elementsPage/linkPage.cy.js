var linkPage = require ('../../pageObjects/elementsPage/linkPage')

describe('Links Page', () => {

    it('Should visit QADEMO Page', () => {
        cy.visit('https://demoqa.com/elements')
    }),

    it('Click the Home link', () =>{
        linkPage.menuLnk()
        linkPage.lnkHome()
    })

})
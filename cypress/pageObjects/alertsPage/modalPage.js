var modalPage = require ('../../locators/alertsPage/modalPage.json')

module.exports = {

    clickModalsMenu: () =>{
        cy.xpath(modalPage.menuModal)
            .click()
    },

    clickSmallModalBtn: () =>{
        cy.get(modalPage.btnSmallModal)
            .should('have.text', 'Small modal')
            .click()
    },

    verifySmallModal: () =>{
        cy.get(modalPage.modalSmall)
            .contains('Small Modal')
            .should('be.visible')
        
        cy.get(modalPage.modalSmall)
            .contains('This is a small modal. It has very less content')
            .should('be.visible')
        
        cy.get(modalPage.modalCloseBtn)
            .should('have.text','Close')
            .click()
    }

}
var textBoxPage = require('../../locators/elementsPage/textBoxPage.json')

module.exports = {

    crdElements: () => {
        cy.xpath(textBoxPage.crdElements)
            .should('be.visible')
            .click();
    },

    menuTxtbx: () => {
        cy.xpath(textBoxPage.menuTxtbx)
            .should('be.visible')
            .click();
    },

    inptFName: () => {
        cy.xpath(textBoxPage.inptFName)
            .should('be.visible')
            .click()
            .clear()
            .type("Derick Castro");
    },

    inptMail: () => {
        cy.xpath(textBoxPage.inptMail)
            .should('be.visible')
            .click()
            .clear()
            .type("testmail@gmail.com");
    },

    inptCrrntAdress: () => {
        cy.xpath(textBoxPage.inptCrrntAddress)
            .should('be.visible')
            .click()
            .clear()
            .type("TestAdd1");
    },

    inptPermAddress: () => {
        cy.xpath(textBoxPage.inptPermAdrdress)
            .should('be.visible')
            .click()
            .clear()
            .type("TestAdd2");
    },

    btnSubmit: () => {
        cy.get(textBoxPage.btnSubmit)
            .should('be.visible')
            .click()
    },

}
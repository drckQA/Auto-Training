var checkBoxPage = require('../../locators/elementsPage/checkBoxPage.json')

module.exports = {

    menuChkBx: () => {
        cy.xpath(checkBoxPage.menuChkBx)
            .should('be.visible')
            .click();
    },

    chkbxHome: () => {
        cy.xpath(checkBoxPage.chkbxHome)
            .should('be.visible')
            .click()
    },

    btnCollpase: () => {
        cy.xpath(checkBoxPage.btnCollapse)
            .should('be.visible')
            .click()
    },

    chkbxHome: () => {
        cy.xpath(checkBoxPage.chkbxHome)
            .should('be.visible')
            .click()
    },

    chkbxDocu: () => {
        cy.xpath(checkBoxPage.chkbxDocu)
            .should('be.visible')
            .click()
    },

    chkbxDL: () => {
        cy.xpath(checkBoxPage.chkbxDL)
            .should('be.visible')
            .click()
    },

    fldResult: () => {
        cy.get(checkBoxPage.fldResult)
            .should('be.visible')
    },

    chkbxDesktop: () => {
        cy.xpath(checkBoxPage.chkbxDesktop)
            .should('be.visible')
            .click()
    }

}
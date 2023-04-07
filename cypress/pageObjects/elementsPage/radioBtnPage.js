var radioBtnPage = require ('../../locators/elementsPage/radioBtnPage.json')

module.exports = {

    menuRadioBtn: () => {
        cy.xpath(radioBtnPage.menuRadioBtn)
            .should('be.visible')
            .and('have.text', 'Radio Button')
            .click()
    },

    btnRadioYes: () => {
        cy.get(radioBtnPage.btnRadioYes)
            .should('be.visible')
            .and('have.text', 'Yes')
            .click()
    },

    btnRadioYes: () => {
        cy.get(radioBtnPage.btnRadioYes)
            .should('be.visible')
            .and('have.text', 'Yes')
            .click()
    },

    fldYesMsg: () => {
        cy.xpath(radioBtnPage.fldRadioMsg)
            .should('be.visible')
            .and('have.text', 'You have selected Yes')
    },

    btnRadioImprssv: () => {
        cy.get(radioBtnPage.btnRadioImprssve)
            .should('be.visible')
            .click()
            .and('have.text', 'Impressive')
    },

    fldImprssvMsg: () => {
        cy.xpath(radioBtnPage.fldRadioMsg)
            .should('be.visible')
            .and('have.text', 'You have selected Impressive')
    },

    btnRadioNo: () => {
        cy.get(radioBtnPage.btnRadioNo)
            .should('not.be.enabled')
            .and('have.text', 'No')
    },

}
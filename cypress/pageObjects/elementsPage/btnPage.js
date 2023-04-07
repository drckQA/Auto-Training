var btnPage = require ('../../locators/elementsPage/btnPage.json')

module.exports = {

    menuBtn: () => {
        cy.xpath(btnPage.menuBtns)
            .should('be.visible')
            .and('have.text','Buttons')
            .click()
    },

    btnDblClck: () => {
        cy.get(btnPage.btnDblClck)
            .should('be.visible')
            .and('have.text','Double Click Me')
            .dblclick()
    },

    fldDblClck: () => {
        cy.xpath(btnPage.fldDblClck)
            .should('be.visible')
            .and('have.text','You have done a double click')
    },

    btnRClck: () => {
        cy.get(btnPage.btnRClick)
            .should('be.visible')
            .and('have.text','Right Click Me')
            .rightclick()
    },

    fldRClck: () => {
        cy.xpath(btnPage.fldRClck)
            .should('be.visible')
            .and('have.text','You have done a right click')
    },

    btnClck: () => {
        cy.xpath(btnPage.btnClck)
            .should('be.visible')
            .and('have.text','Click Me')
            .click()
    },

    fldClck: () => {
        cy.xpath(btnPage.fldClck)
            .should('be.visible')
            .and('have.text','You have done a dynamic click')
    }
}
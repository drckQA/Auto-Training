var bwindowsPage = require ('../../locators/elementsPage/bwindowsPage.json')

module.exports = {

    clickBrowserWindowsMenuBtn: () => {
        cy.xpath(bwindowsPage.menuBrowserWindows)
            .should('be.visible')
            .and('have.text','Browser Windows')
            .click()
    },

    clickNewTabBtn: () => {
        cy.get(bwindowsPage.btnNewTab)
            .invoke('removeAttr', 'target')
            .click()
            .xpath(bwindowsPage.txtNewTab)
            .should('have.text', 'This is a sample page')
    },

}
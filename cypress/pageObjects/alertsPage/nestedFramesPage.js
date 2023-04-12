var nestedFramesPage = require ('../../locators/alertsPage/nestedFramesPage.json')

module.exports = {

    clickNestedFramesMenu: () =>{
        cy.xpath(nestedFramesPage.menuNestedFrames)
            .click()
    },

    verifyParentFrame: () =>{
        cy.iframe(nestedFramesPage.frameParent)
            .contains('Parent frame')
            .should('be.visible')
    },

    verifyChildFrame: () =>{
        cy.iframe(nestedFramesPage.frameChiled)
            .contains('Child Iframe')
            .should('be.visible')
    }

}
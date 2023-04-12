var iframePage = require ('../../locators/elementsPage/iframePage.json')

module.exports = {

    clickFramesMenu: () =>{
        cy.xpath(iframePage.menuFrames)
            .click()
    },

    verifyFirstFrameHeader: () =>{
        cy.iframe(iframePage.frameHeader1)
            .contains('This is a sample page')
            .should('be.visible')
    },

    verifySecondFrameHeader: () =>{
        cy.iframe(iframePage.frameHeader2)
            .contains('This is a sample page')
            .should('be.visible')
    }

}
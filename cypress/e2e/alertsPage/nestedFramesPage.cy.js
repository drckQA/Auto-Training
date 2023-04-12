var nestedFramesPage = require ('../../pageObjects/alertsPage/nestedFramesPage.js')

describe('Nested Frames Page', () => {

    it('Should visit QADEMO Page', () => {
        cy.visit('https://demoqa.com/nestedframes')
    }),

    it('Should click the Nested Frames menu', () => {
        nestedFramesPage.clickNestedFramesMenu()
    }),

    it('Should verify the parent frame', () => {
        nestedFramesPage.verifyParentFrame()
     })

    it('Should verify the child frame', () => {
        nestedFramesPage.verifyChildFrame()
     })
})
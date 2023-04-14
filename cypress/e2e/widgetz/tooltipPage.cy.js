var tooltipPage = require ('../../pageObjects/widgetz/tooltipPage')

describe('Modal Page', () => {

    it('Should visit QADEMO Page', () => {
        cy.visit('https://demoqa.com/tool-tips')
    }),

    it('Should verify the tooltip', () => {
        tooltipPage.verifyToolTip()
    })
})
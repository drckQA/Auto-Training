var progressBarPage = require ('../../pageObjects/widgetz/progressBarPage')

describe('Progress Bar Page', () => {

    it('Should visit QADEMO Page', () => {
        cy.visit('https://demoqa.com/progress-bar')
    }),

    it('Should click Start button', () => {
        progressBarPage.clickStartResetBtn()
    }),

    it('Should verify progress bar', () => {
        progressBarPage.verifyProgressBarValue()
    })

})
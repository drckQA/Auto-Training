var radioBtnPage = require ('../../pageObjects/elementsPage/radioBtnPage')
var textBoxPage = require ('../../pageObjects/elementsPage/textBoxPage')
describe('Radio Button Page', () => {

    it('Should visist Elements page', () => {
        cy.visit('https://demoqa.com/elements')
    
    }),

    it('Should click Radio Button Page', () => {
        radioBtnPage.menuRadioBtn()
    }),

    it('Should select the Yes radio button', () => {
        radioBtnPage.btnRadioYes()
        radioBtnPage.fldYesMsg()
    }),

    it('Should select the Impressive radio button', () => {
        radioBtnPage.btnRadioImprssv()
        radioBtnPage.fldImprssvMsg()
    }),
    
    it('Should check if No button is disabled', () => {
        radioBtnPage.btnRadioNo()
    })
})

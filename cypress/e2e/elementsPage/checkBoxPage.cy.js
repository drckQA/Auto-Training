var checkBoxPage = require('../../pageObjects/elementsPage/checkBoxPage')

describe('Check Box Page', () => {

    it('Should visit the DEMOQA Site', () => {
        cy.visit('https://demoqa.com/elements')
      }),

    it('Should click Check Box menu', () => {
        checkBoxPage.menuChkBx()
    }),
  
    it('Should click the collapse button', () => {
        checkBoxPage.btnCollpase()
    }),

    it('Should click the Desktop checkbox', () => {
        checkBoxPage.chkbxDesktop()
    }),

    it('Should click the Document checkbox', () => {
        checkBoxPage.chkbxDocu()
    }),

    it('Should click the Download checkbox', () => {
        checkBoxPage.chkbxDL()
    }),

    it('Should display the result field', () => {
      checkBoxPage.fldResult()
    }),

    it('Should click the Home checkbox', () => {
        checkBoxPage.chkbxHome()
    })

})
var btnPage = require ('../../pageObjects/elementsPage/btnPage')

describe('Button Page', () =>{

    it('Should visit the DEMOQA Site', () => {
        cy.visit('https://demoqa.com/elements')
      }),
    
    it('Should click Button Menu', () => {
        btnPage.menuBtn()
      }),

    it('Should Double Click the first button', () => {
        btnPage.btnDblClck()
        btnPage.fldDblClck()
      }),

    it('Should Right Click the second button', () => {
        btnPage.btnRClck()
        btnPage.fldRClck()
      }),

    it('Should Click the third button', () => {
        btnPage.btnClck()
        btnPage.fldClck()
      })
      
})
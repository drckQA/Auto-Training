var textBoxPage = require('../../pageObjects/elementsPage/textBoxPage.js')

describe('Text Box Page', () => {

    it('Should visit the DEMOQA Site', () => {
      // cy.visit('https://demoqa.com/')
      cy.visit(Cypress.config('baseUrl'))
    })
      
    it('Should click the Elements menu', () => {
      textBoxPage.crdElements()
    }),
  
    it('Should click the Text Box menu', () => {
      textBoxPage.menuTxtbx()
    }),
  
    it('Should input First Name', () => {
      textBoxPage.inptFName('Derick Castro')
    }),
  
    it('Should input Email Address', () => {
      textBoxPage.inptMail()
    }),
  
    it('Should input Current Address', () => {
      textBoxPage.inptCrrntAdress()
    }),
  
    it('Should input Permanent Address', () => {
      textBoxPage.inptPermAddress()
    }),
  
    it('Should click Submit button', () => {
      textBoxPage.btnSubmit()
    })

})

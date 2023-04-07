var textBoxPage = require('../../pageObjects/elementsPage/textBoxPage')

describe('Text Box Page', () => {

    it('Should visit the DEMOQA Site', () => {
      cy.visit('https://demoqa.com/')
    }),
  
    it('Should click the Elements menu', () => {
      textBoxPage.crdElements()
    }),
  
    it('Should click the Text Box menu', () => {
      textBoxPage.menuTxtbx()
    }),
  
    it('Should input First Name', () => {
      textBoxPage.inptFName()
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

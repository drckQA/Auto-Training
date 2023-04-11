var formsPage = require ('../../pageObjects/elementsPage/formsPage')

describe('Practice Forms Page', () =>{

    it('Should visit the DEMOQA Site', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
      }),
    
    it('Should click Practice Forms menu', () => {
        formsPage.clickMenuForms()
      }),

    it('Should input First Name', () => {
        formsPage.inputFirstName('Frederick')
      }),

    it('Should input Last Name', () => {
        formsPage.inputLastName('Castro')
      }),

    it('Should input Email Address', () => {
        formsPage.inputEmailAdd('testmail@gmail.com')
      }),

    it('Should choose Male as gender', () => {
        formsPage.clickRadioBtnGender()
      }),

    it('Should input Cellphone Number', () => {
        formsPage.inputCellNum('12345678910')
      }),

    it('Should input Birth Date', () => {
        formsPage.inputBirthDate('December', '1996')
      }),

    it('Should input Subject', () => {
        formsPage.inputSubject('En')
      }),

    it('Should click Music checkbox', () => {
        formsPage.clickChckbxHobbies()
      }),

    it('Should upload the image file', () => {
        formsPage.uploadImage()
      }),

    it('Should input current address', () => {
        formsPage.inputAddress('testaddress')
      }),

    it('Should select State and City', () => {
        formsPage.selectStateCity('NCR{enter}', 'Delhi{enter}')
      }),
    
    it('Should click submit button', () => {
        formsPage.clickSubmitButton()
        formsPage.verifyModal()
      })

})
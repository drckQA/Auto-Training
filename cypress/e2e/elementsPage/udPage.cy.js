var udPage = require('../../pageObjects/elementsPage/udPage')

describe('Text Box Page', () => {

    it('Should visit the DEMOQA Site', () => {
        cy.visit(Cypress.config('baseUrl'))
    }),

    it('Should click the Uploads and Downloads menu', () => {
        udPage.clickUploadDownloadMenu()
    }),

    it('Should click the Download button', () => {
        udPage.verifyDownloadBtn()
    }),

    it('Should click the Upload button', () => {
        udPage.verifyUploadBtn()
    })
      
})

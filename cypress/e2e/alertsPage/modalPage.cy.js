var modalPage = require ('../../pageObjects/alertsPage/modalPage')

describe('Modal Page', () => {

    it('Should visit QADEMO Page', () => {
        cy.visit('https://demoqa.com/modal-dialogs')
    }),

    it('Should click the Modal menu', () => {
        modalPage.clickModalsMenu()
    }),

    it('Should click Small Modal button', () => {
        modalPage.clickSmallModalBtn()
     }),

    it('Should verify the small modal', () => {
        modalPage.verifySmallModal()
     })
})
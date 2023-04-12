var bwindowsPage = require('../../pageObjects/alertsPage/bwindowsPage.js')

describe('Browser Windows Page', () => {

    it('Should visit the DEMOQA Site', () => {
        cy.visit('https://demoqa.com/browser-windows')
      }),

    it('Should click the Browser Windows menu', () => {
        bwindowsPage.clickBrowserWindowsMenuBtn()
      }),

    it('Should click the New Tab button', () => {
        bwindowsPage.clickNewTabBtn()
      })

})
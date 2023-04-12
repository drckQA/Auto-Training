var alertsPage = require ('../../pageObjects/alertsPage/alertsPage')

describe('Button Page', () =>{

    it('Should visit the DEMOQA Site', () => {
        cy.visit('https://demoqa.com/alerts')
      }),

    it('Should click Alerts menu', () => {
        alertsPage.clickMenuAlerts
      }),

    it('Should click Alerts menu', () => {
        alertsPage.clickAlertBtn()
      })

     it('Should click Alerts menu and prompt will show after 5 seconds', () => {
        alertsPage.clickAlertBtn5()
      }),
    
    it('Should click confirm the Alert', () => {
        alertsPage.clickAlertConfirm()
      }),

    it('Should input text in Alert prompt', () => {
        alertsPage.clickAlertPrompt()
      })

})
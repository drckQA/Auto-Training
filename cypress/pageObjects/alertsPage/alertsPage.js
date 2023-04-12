var alertsPage= require ('../../locators/alertsPage/alertsPage.json')

module.exports = {

    clickMenuAlerts: () => {
        cy.xpath(alertsPage.menuAlerts)
            .should('be.visible')
            .and('have.text','Alerts')
            .click()
    },

    clickAlertBtn: () => {
        cy.get(alertsPage.btnAlert)
            .click()
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('You clicked a button');
            })
    },

    clickAlertBtn5: () => {
        cy.get(alertsPage.btnAlert5)
            .click()
        cy.on('window:alert',(alert)=>{
            expect(alert).to.contains('This alert appeared after 5 seconds');
            })
    },

    clickAlertConfirm: () => {
        cy.get(alertsPage.btnAlertConfirm)
            .click()

        cy.on('window:confirm',(c)=>{
            expect(c).to.eq('Do you confirm action?');
            })

        cy.get(alertsPage.txtConfirmResult)
            .should('have.text','You selected Ok')
    },

    clickAlertPrompt: () => {
        cy.get(alertsPage.btnAlertPrompt)
            .click()

        // cy.window().then(win => {
        // cy.stub(win, 'prompt').returns('This is my answer.');
        // cy.get('#prompt-button').click();
        // cy.get('#prompt-answer').contains('Answer: This is my answer.');
        //  })

        // cy.on('window:prompt',(c)=>{
        //     expect(c).to.eq('Do you confirm action?');
        //     })
    },

       
}
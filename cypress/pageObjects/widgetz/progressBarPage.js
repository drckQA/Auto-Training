var progressBarPage = require ('../../locators/widgetz/progressBarPage.json')

// const arrows = '{rightArrow}'

module.exports = {


    clickStartResetBtn: () =>{
        cy.get(progressBarPage.btnStartReset)
            .should('have.text','Start')
            .click()
    },

    verifyProgressBarValue: () =>{
        cy.get(progressBarPage.progressBarVal)
        .as('progressbar')
        // .invoke('val', 50)
        .should('have.attr','aria-valuenow', '50')
        cy.get(progressBarPage.btnStartReset)
        .trigger('click')
    }

}
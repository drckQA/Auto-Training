const { should } = require('chai')
var tooltipPage = require ('../../locators/widgetz/tooltipPage.json')

// const arrows = '{rightArrow}'

module.exports = {


    verifyToolTip: () =>{
        cy.get(tooltipPage.btnToolTip)
            .should('have.text','Hover me to see')
            .trigger('mouseover')
            .should('have.attr','aria-describedby', 'buttonToolTip')
    }

}
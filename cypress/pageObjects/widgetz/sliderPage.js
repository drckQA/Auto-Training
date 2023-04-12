var sliderPage = require ('../../locators/widgetz/sliderPage.json')

// const arrows = '{rightArrow}'

module.exports = {


    clickSliderMenu: () =>{
        cy.xpath(sliderPage.menuSlider)
            .should('have.text','Slider')
            .click()
    },

    inputSlider: () =>{
        cy.xpath(sliderPage.inputSlider)
        .as('range')
        .invoke('val', 50)
        .trigger('change')
    }

}
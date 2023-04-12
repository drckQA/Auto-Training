var sliderPage = require ('../../pageObjects/widgetz/sliderPage')

describe('Modal Page', () => {

    it('Should visit QADEMO Page', () => {
        cy.visit('https://demoqa.com/slider')
    }),

    it('Should click the Slider Menu', () => {
        sliderPage.clickSliderMenu()
    }),

    it('Should drag the Slider', () => {
        sliderPage.inputSlider()
    })

})
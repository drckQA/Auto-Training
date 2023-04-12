var accorPage = require ('../../pageObjects/widgetz/accordianPage')

describe('Modal Page', () => {

    it('Should visit QADEMO Page', () => {
        cy.visit('https://demoqa.com/accordian')
    }),

    it('Should click the Accordian menu', () => {
        accorPage.clickAccordianMenu()
    }),

    it('Should click the first accordian in the page', () => {
        accorPage.clickSecondAccordian()
     }),

    it('Should verify content if the accordian', () => {
        accorPage.verifyAccordianContent()
     }),

    it('Should verify if the accordian is closed', () => {
        accorPage.verifyClosedAccordian()
     })
})
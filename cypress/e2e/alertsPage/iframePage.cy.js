var iframePage = require ('../../pageObjects/alertsPage/iframePage.js')

describe('Links Page', () => {

    it('Should visit QADEMO Page', () => {
        cy.visit('https://demoqa.com/frames')
    }),

    it('Should click the Frames menu', () => {
       iframePage.clickFramesMenu()
    }),

    it('Should verify the first iframe header', () => {
        iframePage.verifySecondFrameHeader()
     })

    it('Should verify the second iframe header', () => {
        iframePage.verifySecondFrameHeader()
     })
})
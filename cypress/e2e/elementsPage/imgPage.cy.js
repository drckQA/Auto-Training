var linkPage = require ('../../pageObjects/elementsPage/imgPage')

describe('Links Page', () => {

    it('Should visit QADEMO Page', () => {
        cy.visit('https://demoqa.com/elements')
    }),

    it('Click the Image menu', () =>{
        linkPage.verifyImgMenu()
    }),
    
    it('Click verify if the valid image is displayed', () =>{
        linkPage.verifyValidImage()
    }),

    it('Click verify if the valid broken image is displayed', () =>{
        linkPage.verifyBrokenImage()
    })
})
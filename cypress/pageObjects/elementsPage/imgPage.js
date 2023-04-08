var imgPage = require ('../../locators/elementsPage/imgPage.json')

module.exports = {

    verifyImgMenu: () =>{
        cy.xpath(imgPage.menuImg)
            .should('be.visible')
            .and('have.text', 'Broken Links - Images')  
            .click()
    },

    verifyValidImage: () =>{
        cy.xpath(imgPage.imgValid)
            .should('be.visible')
    },

    verifyBrokenImage: () =>{
        cy.get(imgPage.imgBrkn)
            .should('be.visible')
            .and($img => expect($img[0].naturalWidth).to.be.eq(0))
    }
}
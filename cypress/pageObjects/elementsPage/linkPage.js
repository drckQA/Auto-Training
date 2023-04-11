var linkPage = require ('../../locators/elementsPage/linkPage.json')

module.exports = {

    menuLnk: () => {
        cy.xpath(linkPage.menuLnk)
        .click()
    },
  
    lnkHome: () => {
        cy.get(linkPage.lnkHome)
        // .invoke('removeAttr', 'target')
        .click()
        .url()
        .should('include', 'https://demoqa.com/')
        .go('back');
    }
}
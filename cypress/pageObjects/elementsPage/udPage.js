var udPage = require('../../elementsPage/udPage.json')

module.exports = {

    clickUploadDownloadMenu: () =>  {
        cy.xpath(udPage.menuUploadDownload)
        .should('be.visible')
        .and('have.text', 'Upload and Download')    
        .click()                
    },


    verifyDownloadBtn: () =>  {
        cy.get(udPage.btnDownload)
        .should('be.visible')
        .and('have.text', 'Download')
        .click()
        .type('{enter}')
    },

    verifyUploadBtn: () => {
        cy.get(udPage.btnUpload)
        .selectFile('C:/Users/fccas/Desktop/5aocue4jfs191.webp')
    }

}
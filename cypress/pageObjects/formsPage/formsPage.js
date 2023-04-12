var formsPage = require('../../locators/formsPage/formsPage.json')

module.exports = {

    clickMenuForms: () => {
        cy.xpath(formsPage.menuForms)
            .should('be.visible')
            .and('have.text','Practice Form')
            .click();
    },

    inputFirstName: (FName) => {
        cy.get(formsPage.inputFName)
            .should('be.visible')
            .click()
            .clear()
            .type(FName)
    },

    inputLastName: (LName) => {
        cy.get(formsPage.inputLName)
            .should('be.visible')
            .click()
            .clear()
            .type(LName)
    },

    inputEmailAdd: (EmailAdd) => {
        cy.get(formsPage.inputEmailAdd)
            .should('be.visible')
            .click()
            .clear()
            .type(EmailAdd)
    },

    clickRadioBtnGender: () => {
        cy.get(formsPage.btnMale)
            .should('be.visible')
            .click()
    },

    inputCellNum: (CP) => {
        cy.get(formsPage.inputCellNum)
            .should('be.visible')
            .click()
            .clear()
            .type(CP)
    },

    inputBirthDate: (month, year) => {
        cy.xpath(formsPage.fldBDate)
            .should('be.visible')
            .click()

        cy.get(formsPage.ddBMonth)
            .select(month)
            .should('have.value', '11')
            
        cy.get(formsPage.ddBYear)
            .select(year)
            .should('have.value', '1996')

        cy.get(formsPage.pickBDay)
            .click()
    },

    inputSubject: (Subj) => {
        cy.get(formsPage.inputSubj)
            .should('be.visible')
            .click()
            .type(Subj)
            .type('{enter}')
    },

    clickChckbxHobbies: () => {
        cy.get(formsPage.chkbxHobbies)
            .should('have.value', '3')
            .check({force: true}) // <- used when another element is covering the target element
    },

    uploadImage:() => {
        cy.get(formsPage.fileUpload)
            .selectFile('C:/Users/fccas/Desktop/5aocue4jfs191.webp')
    },

    inputAddress:(address) => {
        cy.get(formsPage.inputAddress)
            .click()
            .clear()
            .type(address)
    },

    selectStateCity:(state, city) => {
        cy.xpath(formsPage.ddState)
            .click()
            .type(state)

        cy.xpath(formsPage.ddCity)
            .click()
            .type(city)
    },

    clickSubmitButton:() => {
        cy.get(formsPage.btnSubmit)
            .should('have.text','Submit')
            .click({force: true})
    },

    verifyModal:() => {
        cy.xpath(formsPage.modalSubmit)
            .should('have.text','Thanks for submitting the form')
            // .click({force: true})
    }

}
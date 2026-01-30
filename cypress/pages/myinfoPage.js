

class MyInfoPage {

    dataMyInfo() { //criado como uma função 
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: '.oxd-input-field-bottom-space',
            genericCalendar: '.bi-calendar',
            genericComboboxSelector: ".oxd-select-text",
            eraseField: '{selectall}{backspace}',
            closeButton: '.--close',
            selectBrazilian: ':nth-child(27) > span',
            selectMarried: '.oxd-select-dropdown > :nth-child(3)',
            saveButton: ".oxd-button--secondary",
        }

        return selectors
    }

    fillPersonalDetails(firstname, middleName, lastName) {
        cy.get(this.dataMyInfo().firstNameField).type(this.dataMyInfo().eraseField).type(firstname)
        cy.get(this.dataMyInfo().middleNameField).clear().type(middleName)
        cy.get(this.dataMyInfo().lastNameField).clear().type(lastName)
   }

    fillEmployeeDetails(employeeId, otherId, driverLicense, licenseExpiryDate, birthDate) {
        cy.get(this.dataMyInfo().genericField).eq(3).type(this.dataMyInfo().eraseField).type(employeeId)
        cy.get(this.dataMyInfo().genericField).eq(4).clear().type(otherId)
        cy.get(this.dataMyInfo().genericField).eq(5).type(this.dataMyInfo().eraseField).type(driverLicense)
        cy.get(this.dataMyInfo().genericCalendar).eq(0).click({force:true}).type(this.dataMyInfo().eraseField).type(licenseExpiryDate)
        cy.get(this.dataMyInfo().closeButton).click()
        cy.get(this.dataMyInfo().genericComboboxSelector).eq(0).click({force:true})
        cy.get(this.dataMyInfo().selectBrazilian).should('contain', 'Brazilian').click()
        cy.get(this.dataMyInfo().genericComboboxSelector).eq(1).click({force:true})
        cy.get(this.dataMyInfo().selectMarried).click()
        cy.get(this.dataMyInfo().genericCalendar).eq(1).click({force:true}).type(this.dataMyInfo().eraseField).type(birthDate)
        cy.get(this.dataMyInfo().closeButton).click()
    }

    saveForm() {
        cy.get(this.dataMyInfo().saveButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Saved')
    }

}

export default MyInfoPage
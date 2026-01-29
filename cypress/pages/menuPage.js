
class MenuPage {
    clickMenu() {
        const selectors = {
            clickMyInfo: "[href='/web/index.php/pim/viewMyDetails']",
        }

        return selectors
    }

    clickMyInfo() {
        cy.get(this.clickMenu().clickMyInfo).click()
    }


}

export default MenuPage


// cy.get(selectorsList.myInfoButton).click()//poderia usar o cy.visit, mas não simula o modo como um usuário utiliza o serviço -> cy.visit('/pim/viewPersonalDetails/empNumber/7')
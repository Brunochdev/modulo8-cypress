
class DashboardPage {
    selectorsList() {
        const selectors = {
            pathname: '.oxd-topbar-header-breadcrumb-module',
        }

        return selectors
    }

    dashboarConfirm() {
        cy.get(this.selectorsList().pathname).contains('Dashboard')
    }


}

export default DashboardPage


    // cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard') //funciona pensando do mesmo modo da linha de cima, ele está fazendo uma verificação para ver se existe - no caso a palavra "Dashboard"

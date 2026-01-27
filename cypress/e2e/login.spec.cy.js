
//Pular teste: it.skip... -> it.skip('Login - Success'......
//Algumas observações: Eu não fiz o melhor modo em alguns lugares do código, mas foi justamente pensando que existe mais de uma maneira de se fazer as coisas

import userData from '../fixtures/users/user-data.json' //esses dados ficam separados para tornar o código mais limpo, então fica na pasta fixtures

const selectorsList = {
  userNameField: '[name="username"]',
  passwordField: '[name="password"]',
  loginButton: '.oxd-button',
}

describe('Orange HRM Tests', () => {
  it('Login - Success', () => {
    cy.visit('/auth/login') // cy.visit vai sempre procurar o baseUrl (baseUrl dentro da configuração pq ela não é um dado de teste e sim um endereço onde será feito os testes, uma configuração) e completar com o que "sobrou" (/auth/login)
    cy.get(selectorsList.userNameField).type(userData.userSuccess.name)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //pathname aqui se refere ao caminho depois da url principal -> passa parâmetro "deve ser igual a" 
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard') //funciona pensando do mesmo modo da linha de cima, ele está fazendo uma verificação para ver se existe - no caso a palavra "Dashboard"
  })

  it('Login - Fail - Username', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userFail.failField)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credentials') //aqui estou passando o texto do alerta, mas não é interessante pois esse texto poderia ser alterado para Invalid Password por exemplo
  })

  it('Login - Fail - Password', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userSuccess.name)
    cy.get(selectorsList.passwordField).type(userData.userFail.failField)
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-alert') //encontrado usando o CSS Selector
  })
})
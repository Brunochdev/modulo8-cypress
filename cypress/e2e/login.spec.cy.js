
//Pular teste: it.skip... -> it.skip('Login - Success'......

const selectorsList = {
  name: 'Admin',
  password: 'admin123',
  failField: 'test',
  userNameField: '[name="username"]',
  passwordField: '[name="password"]',
  loginButton: '.oxd-button',
}

describe('Orange HRM Tests', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.userNameField).type(selectorsList.name)
    cy.get(selectorsList.passwordField).type(selectorsList.password)
    cy.get(selectorsList.loginButton).click()
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //pathname aqui se refere ao caminho depois da url principal -> passa parâmetro "deve ser igual a" 
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard') //funciona pensando do mesmo modo da linha de cima, ele está fazendo uma verificação para ver se existe - no caso a palavra "Dashboard"
  })

  it('Login - Fail - Username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.userNameField).type(selectorsList.failField)
    cy.get(selectorsList.passwordField).type(selectorsList.password)
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credentials') //aqui estou passando o texto do alerta, mas não é interessante pois esse texto poderia ser alterado para Invalid Password por exemplo
  })

  it('Login - Fail - Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.userNameField).type(selectorsList.name)
    cy.get(selectorsList.passwordField).type(selectorsList.failField)
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-alert') //encontrado usando o CSS Selector
  })
})
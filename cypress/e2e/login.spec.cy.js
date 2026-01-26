
//Pular teste: it.skip... -> it.skip('Login - Success'......


describe('Orange HRM Tests', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //pathname aqui se refere ao caminho depois da url principal -> passa parâmetro "deve ser igual a" 
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard') //funciona pensando do mesmo modo da linha de cima, ele está fazendo uma verificação para ver se existe - no caso a palavra "Dashboard"
  })

  it('Login - Fail - Username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Test')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credentials') //aqui estou passando o texto do alerta, mas não é interessante pois esse texto poderia ser alterado para Invalid Password por exemplo
  })

  it('Login - Fail - Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('Test')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert') //encontrado usando o CSS Selector
  })
})
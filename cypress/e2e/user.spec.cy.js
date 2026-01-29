
//Pular teste: it.skip... -> it.skip('Login - Success'......
//Executar somente um dos testes: it.only... -> it.only('Login - Success'......
//Algumas observações: Eu não fiz o melhor modo em alguns lugares do código, mas foi justamente pensando que existe mais de uma maneira de se fazer as coisas

import userData from '../fixtures/users/user-data.json' //esses dados ficam separados para tornar o código mais limpo, então fica na pasta fixtures

const selectorsList = { //primeira parte da automação até chegar no "My Info"
  userNameField: '[name="username"]',
  passwordField: '[name="password"]',
  loginButton: '.oxd-button',
  myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
}

const selectorMyInfo = { //Dados utilizados para preenchimento de cadastro do usuário
  genericField: '.oxd-input-field-bottom-space',
  genericCalendar: '.bi-calendar',
  genericComboboxSelector: ".oxd-select-text",
  eraseField: '{selectall}{backspace}',
  firstNameField: "[name='firstName']",
  middleNameField: "[name='middleName']",
  lastNameField: "[name='lastName']",
  saveButton: ".oxd-button--secondary",
  saveConfirmation: "#oxd-toaster_1",
}

describe('Orange HRM Tests', () => {
  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login') // cy.visit vai sempre procurar o baseUrl (baseUrl dentro da configuração pq ela não é um dado de teste e sim um endereço onde será feito os testes, uma configuração) e completar com o que "sobrou" (/auth/login)
    cy.get(selectorsList.userNameField).type(userData.userSuccess.name)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //pathname aqui se refere ao caminho depois da url principal -> passa parâmetro "deve ser igual a" 
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard') //funciona pensando do mesmo modo da linha de cima, ele está fazendo uma verificação para ver se existe - no caso a palavra "Dashboard"
    cy.get(selectorsList.myInfoButton).click()//poderia usar o cy.visit, mas não simula o modo como um usuário utiliza o serviço -> cy.visit('/pim/viewPersonalDetails/empNumber/7')
    cy.get(selectorMyInfo.firstNameField).type(selectorMyInfo.eraseField).type(userData.dataMyInfo.firstName)
    cy.get(selectorMyInfo.middleNameField).clear().type(userData.dataMyInfo.middleName)
    cy.get(selectorMyInfo.lastNameField).clear().type(userData.dataMyInfo.lastName)
    cy.get(selectorMyInfo.genericField).eq(3).type(selectorMyInfo.eraseField).type(userData.dataMyInfo.employeeId)
    cy.get(selectorMyInfo.genericField).eq(4).clear().type(userData.dataMyInfo.otherId)
    cy.get(selectorMyInfo.genericField).eq(5).type(selectorMyInfo.eraseField).type(userData.dataMyInfo.driverLicense)
    cy.get(selectorMyInfo.genericCalendar).eq(0).click({force:true}).type(selectorMyInfo.eraseField).type('1990-10-10')
    cy.get('.--close')
    cy.get(selectorMyInfo.genericComboboxSelector).eq(0).click({force:true})
    cy.get(':nth-child(27) > span').should('contain', 'Brazilian').click()
    cy.get(selectorMyInfo.genericComboboxSelector).eq(1).click({force:true})
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    cy.get(selectorMyInfo.genericCalendar).eq(1).click({force:true}).type(selectorMyInfo.eraseField).type('2028-10-10')
    cy.get('.--close')


    cy.get(selectorMyInfo.saveButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Saved')
  })

  it('User Info Update - Fail - Username', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userFail.failField)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credentials') //aqui estou passando o texto do alerta, mas não é interessante pois esse texto poderia ser alterado para Invalid Password por exemplo
  })

  it.skip('User Info Update - Fail - Password', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userSuccess.name)
    cy.get(selectorsList.passwordField).type(userData.userFail.failField)
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-alert') //encontrado usando o CSS Selector
  })
})
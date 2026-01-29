// O conceito de pages é o page objects e serve para organizar melhor o código e saber de onde vem cada informação, muitas vezes para não ficar aquela "tripa" de código gigante que vc nem sabe de onde está vindo, pra onde está indo e o que está chamando

class LoginPage {

    selectorsList() { //criado como uma função 
        const selectors = {
            userNameField: "[name='username']",
            passwordField: '[name="password"]',
            loginButton: '.oxd-button',
            wrongCredentials: '.oxd-alert',
        }

        return selectors
    }

    accessLogin() {
        cy.visit('/auth/login')
    }

    loginSuccess(username, password) {
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    loginFailUser(username, password) {
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongCredentials).contains('Invalid credentials')
    }

    loginFailPassword(username, password) {
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongCredentials).contains('Invalid credentials')
    }
}

export default LoginPage
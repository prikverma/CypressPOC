class LoginPage {


    getSignupName(name) {
        cy.get("input[type='text']").type(name)

    }
    getSignupEmail(email) {
        cy.get("input[data-qa='signup-email']").type(email)
    }
    getSignupButton() {
        return cy.get("button[data-qa='signup-button']").click({ multiple: true })
    }
    verifySignupText() {
        return cy.get("div[class='signup-form'] h2").and("have.text", "New User Signup!")
    }
    verifyLoginToYourAccountText() {
        return cy.get("div[class='login-form']>h2").should("be.visible").and("have.text", "Login to your account")
    }
    getLoginEmail(email1) {
        cy.get("input[data-qa='login-email']").type(email1)
    }
    getLoginPassword(password1) {
        cy.get("input[data-qa='login-password']").type(password1)
    }
    getLoginButton() {
        return cy.get("button[data-qa='login-button']").click()
    }
    verifyLoginToYourAccountName() {
        return cy.get("div>ul >li:nth-child(10)>a").should("be.visible")
    }
    verifyLoginValidationTextMessage() {
        return cy.get(".login-form > form > p").should("be.visible").and("have.text", "Your email or password is incorrect!")

    }
    verifySignupValidationTextMessage() {
        return cy.get("p:nth-child(5)").should("have.text", "Email Address already exist!").and("be.visible")

    }
}

export default LoginPage;
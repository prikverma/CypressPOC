class HomePage {

    verifyLoginAsText() {
        return cy.get("div>ul >li:nth-child(10)>a").should("be.visible").and("have.text", ' Logged in as PVerma')

    }
    getDeleteAccountButton() {
        return cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

    }
    verifyAccountDeleteText() {
        return cy.get("div>h2>b").should("be.visible").and("have.text", "Account Deleted!")

    }
    getAccountDeleteContinueButton() {
        return cy.get("div>a[class='btn btn-primary']").click()
    }
    verifyHomePageVisibility() {
        return cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("be.visible").and("have.text", " Home")

    }
    getSignupLoginButton() {
        return cy.get("a[href='/login']").click()
    }
    getLogoutButton() {
        return cy.get("a[href='/logout']").click()
    }
    verifyLoginPageNavigation() {
        return cy.url().should('eq', 'https://automationexercise.com/login').then(function () {
            cy.log("user is navigated to login page")
        })
    }
    getContactUsButton() {
        return cy.get("a[href='/contact_us']").click()
    }
    getTestCaseButton() {
        return cy.get("ul[class='nav navbar-nav']> li:nth-child(5)> a[href='/test_cases']").click()
    }
    getProductsButton() {
        return cy.get("a[href='/products']").click()
    }
    getFooter() {
        return cy.get("#footer")
    }
    verifySubscriptionText() {
        return cy.get("div[class='single-widget'] h2").should("have.text", "Subscription")
    }
    getSubscribeEmail(email) {
        cy.get("#susbscribe_email").type(email)
    }
    getSubscribeButton() {
        return cy.get(".fa.fa-arrow-circle-o-right").click()
    }
    verifySubscribeAlertText() {
        return cy.get('.alert-success').should("exist").and("have.text", "You have been successfully subscribed!")

    }
    getCartButton() {
        return cy.get("div>ul[class='nav navbar-nav'] :nth-child(3) >a").click()
    }

}
export default HomePage;
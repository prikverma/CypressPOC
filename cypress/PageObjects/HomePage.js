class HomePage {

    verifyLoginAsText() {
        return cy.get("div>ul >li:nth-child(10)>a").should("be.visible")

    }
    getDeleteAccountButton() {
        return cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

    }
    verifyAccountDeleteText() {
        return cy.get("div>h2>b").should("be.visible").and("have.text", "Account Deleted!")

    }
    getAccountDeleteContinueButton() {
        return cy.get("div>a[class='btn btn-primary']").click().then(() => {
            cy.log("Account deleted Successfully ")
        })
    }
    verifyHomePageVisibility() {
        return cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("be.visible").and("have.text", " Home")

    }
    getSignupLoginButton() {
        return cy.get("a[href='/login']").click({ multiple: true, force: true })
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
    verifyRecommendedItemsTitle() {
        return cy.get("div[class='recommended_items'] h2[class='title text-center']").should("be.visible").and("have.text", "recommended items")

    }
    addFirstItemFromRecommendedItems() {
        return cy.get("div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) a").eq(0).click({ force: true })
    }
    addProductFromTile() {
        return cy.get("h2[class='title text-center']").invoke("show").then(() => {
            cy.get(" div.col-sm-4:nth-child(4) div.product-image-wrapper div.single-products div.product-overlay div.overlay-content > a.btn.btn-default.add-to-cart:nth-child(3)").click({ force: true })
        })
    }
    addProduct1FromFeaturesItems() {
        return cy.get("h2[class='title text-center']").invoke("show").then(() => {
            cy.get(" div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3)").click({ force: true })
        })
    }
    getArrowButton() {
        return cy.get(".fa.fa-angle-up").click()
    }
    verifyPageScrollUpArrow() {
        return cy.window().its("scrollY").should("eq", 0).then(() => {
            cy.log("page is scrolled up")
        });
    }
    verifyFullFledgedPracticeText() {
        return cy.get("div[class='item active'] div[class='col-sm-6'] h2").should("have.text", "Full-Fledged practice website for Automation Engineers")
    }
    verifyScrollUpWithoutArrow() {
        return cy.window().its("scrollX").should("eq", 0).then(() => {
            cy.log("page is scrolled up")
        })
    }
}
export default HomePage;
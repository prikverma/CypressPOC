class CartPage {
    getFooter() {
        return cy.get("#footer")
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
    verifyViewCartPageNavigation() {
        return cy.url().should("include", "/view_cart").then(() => {
            cy.log("You are at view cart page")
        })
    }
    getProceedToCheckoutButton() {
        return cy.get(".btn.btn-default.check_out").click()
    }
    getRegisterLoginButtonOnPrompt() {
        return cy.get("a:nth-child(1) > u:nth-child(1)").click()
    }
}
export default CartPage;
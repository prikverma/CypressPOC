/// <reference types="Cypress" />

class PaymentPage {
    getNameOnCard(name) {
        cy.get("input[name='name_on_card']").type(name)
    }
    getCardNumber(card) {
        cy.get("input[name='card_number']").type(card)
    }
    getCVV(cvv) {
        cy.get("input[placeholder='ex. 311']").clear().type(cvv)
    }
    getExpirationDate(date) {
        cy.get("input[placeholder='MM']").clear().type(date)
    }
    getExpirationYear(year) {
        cy.get("input[placeholder='YYYY']").clear().type(year)
    }
    getPayAndConfirmOrderButton() {
        return cy.get("#submit").click()
    }
    verifyOrderConfirmationText() {
        cy.get(".container .row div[class='col-sm-9 col-sm-offset-1'] p").should("contain.text", "Congratulations! Your order has been confirmed!")
    }
}
export default PaymentPage;
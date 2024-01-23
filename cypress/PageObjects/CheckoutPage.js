class CheckoutPage {
    verifyAddress() {
        return cy.get('#address_delivery > :nth-child(4)').then((address) => {
            var addresstext = address.text()
            expect(addresstext).include("135 New Mohanpura")
        })
    }
    verifyProduct2Order() {
        return cy.get("#product-2").should("contain.text", "Men Tshirt")
    }
    getOrderDescriptionBox(msg) {
        return cy.get("textarea[name='message']").type(msg)

    }
    getPlaceOrderButton() {
        return cy.get(".btn.btn-default.check_out").click()
    }
    verifyInvoiceAddress() {
        return cy.get('#address_invoice > :nth-child(4)').then((address2) => {
            var addresstext2 = address2.text()
            expect(addresstext2).include("135 New Mohanpura")
        })
    }

}
export default CheckoutPage;
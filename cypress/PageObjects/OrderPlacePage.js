class OrderPlacePage {
    getContinueButton() {
        return cy.get("[data-qa='continue-button']").click()
    }
}
export default OrderPlacePage;
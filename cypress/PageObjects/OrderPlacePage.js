class OrderPlacePage {
    getContinueButton() {
        return cy.get("[data-qa='continue-button']").click()
    }
    verifyFileDownloadData() {
        return cy.get('.col-sm-9 > .btn-default').click().then(() => {
            cy.readFile("cypress/downloads/invoice.txt").should('contain', 'Hi Prikshit Verma, Your total purchase amount is 500. Thank you')
        })
    }
}
export default OrderPlacePage;
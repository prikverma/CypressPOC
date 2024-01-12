class TestCasePage {
    verifyTestCasePageNavigation() {
        cy.url().should("include", "/test_cases").then(function () {
            cy.log("User is navigated to test cases page successfully")
        })
    }
}
export default TestCasePage;
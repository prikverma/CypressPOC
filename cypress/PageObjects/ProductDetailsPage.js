class ProducstDetailsPage {
    verifyProductInformation() {
        return cy.get("div[class='product-information'] h2").should("be.visible").then(function () {
            cy.log("Product Name is visible")
        })
    }
    verifyCategoryVisible() {
        return cy.get(" div:nth-child(1) > p:nth-child(3)").should("be.visible").then(function () {
            cy.log("'category' is visible")
        })
    }
    verifyPriceVisible() {
        return cy.get("div[class='product-information'] span span").should("be.visible").then(function () {
            cy.log("'price' is visible")
        })
    }
    verifyAvailabilityVisible() {
        return cy.get(" p:nth-child(6) > b:nth-child(1)").should("be.visible").then(function () {
            cy.log("'Availability' is visible")
        })
    }
    verifyConditionVisible() {
        return cy.get(" p:nth-child(7) > b:nth-child(1)").should("be.visible").then(function () {
            cy.log(" 'Condition' is visible")
        })
    }
    verifyBrandVisible() {
        return cy.get(" p:nth-child(8) > b:nth-child(1)").should("be.visible").then(function () {
            cy.log(" 'Brand' is visible")
        })
    }
}
export default ProducstDetailsPage;
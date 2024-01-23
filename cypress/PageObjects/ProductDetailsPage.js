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
    verifyWomenDressPageNavigation() {
        return cy.url().should("include", "/category_products/1").then(() => {
            cy.log("You are at Women dress product page")

        })
    }
    verifyWomenDressTitle() {
        return cy.get(".title.text-center").should("have.text", "Women - Dress Products")

    }
    verifyMenJeansTitle() {
        cy.get(".title.text-center").should("have.text", "Men - Jeans Products").then(() => {
            cy.log("You are ar Mens' Jeans Product page")
        })
    }
    verifyHnMPageNavigation() {
        return cy.url().should("include", "/brand_products/H&M").then(() => {
            cy.log("User is navigated to brand page")
        })
    }
    verifyHnMTitle() {
        return cy.get(".title.text-center").should("have.text", "Brand - H&M Products").then(() => {
            cy.log("You are at H&M Products page")
        })
    }
    verifyMadameTitle() {
        return cy.get(".title.text-center").should("have.text", "Brand - Madame Products").then(() => {
            cy.log("User is navigated to Brand - Madame products page")
        })
    }
    verifyWriteYourReviewText() {
        return cy.get("a[href='#reviews']").should("be.visible").and("have.text", "Write Your Review")
    }
    getReviewName(name) {
        return cy.get("#name").type(name)
    }
    getReviewEmail(email) {
        return cy.get("#email").type("pverma@gmail.com")
    }
    getReviewBox(msg) {
        cy.get("#review").type(msg)
    }
    getSubmitReviewButton() {
        cy.get("#button-review").click()
    }
    verifyReviewMessage() {
        return cy.get("div[class='alert-success alert'] span").invoke("show").should("have.text", "Thank you for your review.")
    }
}
export default ProducstDetailsPage;
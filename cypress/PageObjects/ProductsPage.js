/// <reference types="Cypress" />
let Price1
let Price2
let quantity1
let quantity2
let TotalPrice1
let TotalPrice2

class ProducstsPage {


    verifyProductPageNavigation() {
        return cy.url().should("include", "/products").then(function () {
            cy.log("User is navigated to ALL PRODUCTS page successfully")
        })
    }
    getViewProduct1Button() {
        return cy.get("a[href = '/product_details/1']").click()
    }
    getSearchProduct(productname) {
        return cy.get("#search_product").type(productname)
    }
    getSubmitSearch() {
        return cy.get("#submit_search").click()
    }
    verifySearchedProduct() {
        return cy.get(" div:nth-child(1) > p:nth-child(3)").should("be.visible").and("contain.text", "Blue").then(() => {
            cy.log("'SEARCHED PRODUCTS' is visible ")
        })
    }
    verifyAllRelatedSearchedProductsVisible() {
        return cy.get("div[class='col-sm-4']>.product-image-wrapper p:nth-child(3)").should("include.text", "Blue").then(() => {
            cy.log("all the products related to search are visible")
        })
    }
    addFirstItemToTheCart() {
        return cy.get("h2[class='title text-center']").invoke("show").then(() => {
            cy.get(" div.col-sm-4:nth-child(3) div.product-image-wrapper div.single-products div.product-overlay div.overlay-content a.btn.btn-default.add-to-cart:nth-child(3)").click({ force: true })
        })
    }
    getContinueShoppingButton() {
        return cy.get(" button.btn.btn-success.close-modal.btn-block").click()
    }
    addSecondItemToTheCart() {
        return cy.get("h2[class='title text-center']").invoke("show").then(() => {
            cy.get(" div.col-sm-4:nth-child(4) div.product-image-wrapper div.single-products div.product-overlay div.overlay-content > a.btn.btn-default.add-to-cart:nth-child(3)").click({ force: true })
        })
    }
    getViewCartOnPrompt() {
        return cy.get("div[class='modal-content']> :nth-child(2) >p:nth-child(2) >a").click()
    }
    verifyFirstItemAdded() {
        return cy.get("#product-1").should("contain.text", "Blue Top").then(() => {
            cy.log("First Product Added to the cart")
        })
    }
    verifySecondItemAdded() {
        return cy.get("#product-2").should("contain.text", "Men Tshirt").then(() => {
            cy.log("Second Product Added to the cart")
        })
    }
    verifyPrices_Quantity_TotalPrice() {

        cy.get("tr[id='product-1'] td[class='cart_price'] p").then((price1) => {
            var price1text = price1.text()
            Price1 = price1text.split(" ")
            Price1 = Price1[1].trim()
        })
        cy.get("tr[id='product-1'] button[class='disabled']").then((text1) => {
            quantity1 = text1.text()
        })
        cy.get("tr[id='product-1'] p[class='cart_total_price']").then((totalPrice1) => {
            var totalPrice1text = totalPrice1.text()
            TotalPrice1 = totalPrice1text.split(" ")
            TotalPrice1 = TotalPrice1[1].trim()
            cy.log(TotalPrice1)
        }).then(() => {
            expect(Number(Price1) * Number(quantity1)).to.equal(Number(TotalPrice1))

        })

        cy.get("tr[id='product-2'] td[class='cart_price'] p").then((price2) => {
            var price2text = price2.text()
            Price2 = price2text.split(" ")
            Price2 = Price2[1].trim()
        })
        cy.get("tr[id='product-2'] button[class='disabled']").then((text2) => {
            quantity2 = text2.text()
        })
        cy.get("tr[id='product-2'] p[class='cart_total_price']").then((totalPrice2) => {
            var totalPrice2text = totalPrice2.text()
            TotalPrice2 = totalPrice2text.split(" ")
            TotalPrice2 = TotalPrice2[1].trim()

        }).then(() => {
            expect(Number(Price2) * Number(quantity2)).to.equal(Number(TotalPrice2))
        })

    }
    getViewProductButtonAll() {
        return cy.get("ul.nav.nav-pills.nav-justified li:nth-child(1) > a:nth-child(1)")
    }
    verifyIncreaseProductsQuantity() {
        cy.get("#quantity").type('{selectall}{backspace}').type("4").then(() => {
            cy.get("button[type='button']").click()
        })
        cy.get(" a:nth-child(1) > u:nth-child(1)").click()
        cy.get(".disabled").then((prodQuant) => {
            var prodQuanttext = prodQuant.text()
            expect(Number(prodQuanttext)).to.equal(4)
        })
    }
    verifyCategoryText() {
        cy.get("div:nth-child(1) > div:nth-child(1) > h2:nth-child(1)").should("be.visible").and("have.text", "Category")

    }
    getWomenCategory() {
        cy.get(" div:nth-child(1) > div:nth-child(1) > h4:nth-child(1) > a:nth-child(1)").click()

    }
    getWomenDress() {
        cy.get("a[href='/category_products/1']").click()
    }
    getMenCategory() {
        return cy.get("div:nth-child(2) >div:nth-child(1) > h4:nth-child(1) > a:nth-child(1)").click()
    }
    getMenJeans() {
        return cy.get("a[href='/category_products/6']").click()
    }
    getBrandsCategory() {
        return cy.get("div[class='brands_products'] h2").should("be.visible").and("have.text", "Brands")
    }
    getHnM() {
        return cy.get("a[href='/brand_products/H&M']").click()
    }
    getMadame() {
        return cy.get("a[href='/brand_products/Madame']").click()
    }
    addSearchedProducts() {
        return cy.get('.productinfo.text-center a').each(($el) => {

            cy.get($el).click({ multiple: true, force: true })
            cy.get(" button.btn.btn-success.close-modal.btn-block").click()
        })
    }
    verifySearchedProductTitle() {
        return cy.get(".title.text-center").should("have.text", "Searched Products")
    }
}

export default ProducstsPage;

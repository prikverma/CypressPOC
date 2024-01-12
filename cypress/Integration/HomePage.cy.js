/// <reference types="Cypress" />

import LoginPage from "../PageObjects/LoginPage"
import SignupPage from "../PageObjects/SignupPage"
import HomePage from "../PageObjects/HomePage"
import ContactUsPage from "../PageObjects/ContactUsPage"
import TestCasePage from "../PageObjects/TestCasePage"
import ProducstsPage from "../PageObjects/ProductsPage"
import ProducstDetailsPage from "../PageObjects/ProductDetailsPage"
import CartPage from "../PageObjects/CartPage"
import CheckoutPage from "../PageObjects/CheckoutPage"
import PaymentPage from "../PageObjects/PaymentPage"
describe("Test Suite", function () {


    const login = new LoginPage()
    const signup = new SignupPage()
    const home = new HomePage()
    const contactus = new ContactUsPage()
    const testcase = new TestCasePage()
    const products = new ProducstsPage()
    const productdetails = new ProducstDetailsPage()
    const cartpage = new CartPage()
    const checkoutpage = new CheckoutPage()
    const payment = new PaymentPage()

    beforeEach(function () {
        cy.visit("https://automationexercise.com/")
    })

    it("1. Register User", function () {

        // Verify home page visibility
        home.verifyHomePageVisibility()
        //Click on 'Signup / Login' button
        home.getSignupLoginButton()
        // Verify 'New User Signup!' is visible
        login.verifySignupText()
        //Enter name and email address and click on signup button
        login.getSignupName("PVerma")
        login.getSignupEmail("pvermat21@gmail.com")
        login.getSignupButton()
        //Signup page elements
        signup.verifyEnterAccountInformationText()
        signup.getTitle()
        signup.getPassword("Prik@123")
        signup.getDay("8")
        signup.getMonth("January")
        signup.getYear("1994")
        signup.getNewsletterCheckbox()
        signup.getSpecialoffersCheckbox()
        signup.getFirstname("Prikshit")
        signup.getLastname("Verma")
        signup.getCompanyName("P.S. Intelegencia Analytics Pvt. Ltd.")
        signup.getAddress1("135 New Mohanpura")
        signup.getAddress2("CCS Colony")
        //dropdown select India
        signup.getCountryDropdown()

        signup.getState("Uttarakhand")
        signup.getCity("Roorkee")
        signup.getZipcode("302134")
        signup.getMobilenumber("123456566")
        signup.getCreateAccountButton()
        //account creation text 
        signup.verifyAccoutCreatedText()
        signup.getAccountCreatedContinueButton()
        //home page elements
        home.verifyLoginAsText()
        //account Delete button
        home.getDeleteAccountButton()
        //Account Delete text
        home.verifyAccountDeleteText()
        home.getAccountDeleteContinueButton().then(function () {
            cy.log("Account Deleted Successfully")
        })
    })

    it("2. Login User with correct email and password", function () {
        //Verify home page visibility
        home.verifyHomePageVisibility()
        //Click on 'Signup / Login' button
        home.getSignupLoginButton()
        login.verifyLoginToYourAccountText()
        login.getLoginEmail("pvermat12@gmail.com")
        login.getLoginPassword("Prik@123")
        login.getLoginButton()
        login.verifyLoginToYourAccountName().and("have.text", ' Logged in as Pverma')
        //Account deleted 
        // cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        // cy.get("div>h2>b").should("be.visible").and("have.text", "Account Deleted!")
        // cy.get("div>a[class='btn btn-primary']").click().then(function () {
        //     cy.log("Account Deleted Successfully")
        // })
    })

    it("3. Login User with incorrect email and password", function () {
        // Verify home page visibility
        home.verifyHomePageVisibility()
        //Click on 'Signup / Login' button
        home.getSignupLoginButton()
        login.verifyLoginToYourAccountText()
        login.getLoginEmail("pverma08@gmail.com")
        login.getLoginPassword("Prik@12")
        login.getLoginButton()
        //validate text after entering wrong email or password
        login.verifyLoginValidationTextMessage()
    })

    it("4. Logout User", function () {
        home.verifyHomePageVisibility()
        //Click on 'Signup / Login' button
        home.getSignupLoginButton()
        login.verifyLoginToYourAccountText()

        login.getLoginEmail("pverma@gmail.com")
        login.getLoginPassword("Prik@123")
        login.getLoginButton()
        home.getLogoutButton()
        //Verifying login page navigation 
        home.verifyLoginPageNavigation()
    })

    it("5: Register User with existing email", function () {
        // Verify home page visibility
        home.verifyHomePageVisibility()
        //Click on 'Signup / Login' button
        home.getSignupLoginButton()
        // Verify 'New User Signup!' is visible
        login.verifySignupText()
        //Enter name and email address and click on signup button
        login.getSignupName("Pverma")
        login.getSignupEmail("pverma@gmail.com")
        login.getSignupButton()
        //signup text message validation
        login.verifySignupValidationTextMessage()
    })
    it("6: Contact Us Form", function () {
        // Verify home page visibility
        home.verifyHomePageVisibility()
        home.getContactUsButton()
        contactus.verifyGetInTouchText()
        contactus.getName("Prikshit")
        contactus.getEmail("pverma6@gmail.com")
        contactus.getSubject("I want to automate this site")
        contactus.getMessage("This is a meggage for you. That I am a good person.")
        contactus.getUploadButton()
        contactus.getSubmitButton()
        contactus.verifyFilesSuccessMessage()
    })

    it("7: Verify Test Cases Page", function () {
        // Verify home page visibility
        home.verifyHomePageVisibility()
        home.getTestCaseButton()
        testcase.verifyTestCasePageNavigation()
    })
    it("8: Verify All Products and product detail page", function () {
        // Verify home page visibility
        home.verifyHomePageVisibility()
        home.getProductsButton()
        products.verifyProductPageNavigation()
        // clicking on view product button
        products.getViewProduct1Button()
        //verify product details
        productdetails.verifyProductInformation()
        productdetails.verifyCategoryVisible()
        productdetails.verifyPriceVisible()
        productdetails.verifyAvailabilityVisible()
        productdetails.verifyConditionVisible()
        productdetails.verifyBrandVisible()
    })

    it("9: Search Product", function () {
        // Verify home page visibility
        home.verifyHomePageVisibility()
        home.getProductsButton()
        //verify page navigation
        products.verifyProductPageNavigation()
        //search the product
        products.getSearchProduct("Blue")
        products.getSubmitSearch()
        products.verifySearchedProduct()
        //Redefine logic to Verify all the products related to search are visible
        products.verifyAllRelatedSearchedProductsVisible()

    })
    it("10: Verify Subscription in home page", () => {
        // Verify home page visibility
        home.verifyHomePageVisibility()
        home.getFooter().scrollIntoView()
        home.verifySubscriptionText()
        home.getSubscribeEmail("pverma@gmail.com")
        home.getSubscribeButton()
        home.verifySubscribeAlertText()
    })

    it("11: Verify Subscription in Cart page", () => {
        // Verify home page visibility
        home.verifyHomePageVisibility()
        home.getCartButton()
        cartpage.getFooter().scrollIntoView()
        cartpage.getSubscribeEmail("pverma@gmail.com")
        cartpage.getSubscribeButton()
        cartpage.verifySubscribeAlertText()
    })
    it("12: Add Products in Cart", () => {

        // Verify home page visibility
        home.verifyHomePageVisibility()
        home.getProductsButton()

        //adding first item in the cart
        products.addFirstItemToTheCart()
        //continue shoping button
        products.getContinueShoppingButton()
        //adding second item in the cart
        products.addSecondItemToTheCart()
        //ViewCart Button on Item added prompt
        products.getViewCartOnPrompt()
        //verify both product added to the cart
        products.verifyFirstItemAdded()
        products.verifySecondItemAdded()
        //Verify added product's prices, quantity and total price
        products.verifyPrices_Quantity_TotalPrice()
    })
    it("13: Verify Product quantity in Cart", function () {
        // Verify home page visibility
        home.verifyHomePageVisibility()
        home.getProductsButton()
        products.getViewProductButtonAll().eq(1).click()
        products.verifyIncreaseProductsQuantity()

    })
    it.only("14: Place Order: Register while Checkout", function () {
        // Verify home page visibility
        home.verifyHomePageVisibility()
        //add item 2nd to the cart
        products.addSecondItemToTheCart()
        //click on view cart page
        // cy.get("a:nth-child(1) > u:nth-child(1)").click()
        products.getViewCartOnPrompt()
        cartpage.verifyViewCartPageNavigation()
        cartpage.getProceedToCheckoutButton()
        //click on Register?Login button
        cartpage.getRegisterLoginButtonOnPrompt()
        //signup
        login.getSignupName("PVerma")
        login.getSignupEmail("pvermatest130@gmail.com")
        login.getSignupButton()
        signup.getTitle()
        signup.getPassword("Prik@123")
        signup.getDay("8")
        signup.getMonth("January")
        signup.getYear("1994")
        signup.getNewsletterCheckbox()
        signup.getSpecialoffersCheckbox()
        signup.getFirstname("Prikshit")
        signup.getLastname("Verma")
        signup.getCompanyName("P.S. Intelegencia Analytics Pvt. Ltd.")
        signup.getAddress1("135 New Mohanpura")
        signup.getAddress2("CCS Colony")
        //dropdown select India
        signup.getCountryDropdown()

        signup.getState("Uttarakhand")
        signup.getCity("Roorkee")
        signup.getZipcode("201306")
        signup.getMobilenumber("12345678")
        signup.getCreateAccountButton()
        signup.verifyAccoutCreatedText()
        signup.getAccountCreatedContinueButton()
        //loggedin
        home.verifyLoginAsText()
        home.getCartButton()
        //clickproceed to buy
        cartpage.getProceedToCheckoutButton()

        checkoutpage.verifyAddress()

        checkoutpage.verifyProduct2Order()
        //Enter in Text area
        checkoutpage.getOrderDescriptionBox("This is my order using Cypress Automation")
        checkoutpage.getPlaceOrderButton()
        payment.getNameOnCard("Prikshit")
        payment.getCardNumber("1234 45677 4342")
        payment.getCVV("213")
        payment.getExpirationDate("08")
        payment.getExpirationYear("2025")
        payment.getPayAndConfirmOrderButton().then(() => {
            cy.wait(500)
        })
        payment.verifyOrderConfirmationText()
        //delete Account
        home.getDeleteAccountButton()
        home.verifyAccountDeleteText()
        home.getAccountDeleteContinueButton()
    })
    it("15: Place Order: Register before Checkout", function () {
        // Verify home page visibility
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("have.text", " Home").and("be.visible")
        cy.get(" ul.nav.navbar-nav li:nth-child(4) > a:nth-child(1)").click()
        cy.get("input[type='text']").type("PVerma")
        cy.get("input[data-qa='signup-email']").type("pvermatest6@gmail.com")
        cy.get("button[data-qa='signup-button']").click({ multiple: true })
        cy.get('#id_gender1').check().should("be.checked")
        cy.get('#password').type("Prik@123")
        cy.get("select[id='days']").select("8")
        cy.get("div[id='uniform-months'] > select").select("January")
        cy.get("div[id='uniform-years'] > select").select("1994")
        cy.get("#newsletter").check().should("be.checked")
        cy.get("#optin").check().should("be.checked")
        cy.get("#first_name").type("Prikshit")
        cy.get("#last_name").type("Verma")
        cy.get("#company").type("P.S. Intelegencia Analytics Pvt. Ltd.")
        cy.get("#address1").type("135 New Mohanpura")
        cy.get("#address2").type("CCS Colony")
        //dropdown select India
        cy.get("#country").each(($el) => {

            if ($el.text === "India") {
                cy.wrap($el).select()
            }
        })

        cy.get("#state").type("Uttarakhand")
        cy.get("#city").type("Roorkee")
        cy.get("#zipcode").type("201306")
        cy.get("#mobile_number").type("12345678")
        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should("be.visible").and("have.text", "Account Created!")
        cy.get('[data-qa="continue-button"]').click()
        cy.get("div>ul >li:nth-child(10)>a").should("be.visible").and("have.text", ' Logged in as PVerma')
        //add product to the cart
        cy.get("h2[class='title text-center']").invoke("show").then(() => {
            cy.get(" div.col-sm-4:nth-child(4) div.product-image-wrapper div.single-products div.product-overlay div.overlay-content > a.btn.btn-default.add-to-cart:nth-child(3)").click({ force: true })


        })
        cy.get("a:nth-child(1) > u:nth-child(1)").click()
        cy.url().should("include", "/view_cart").then(() => {
            cy.log("You are at view cart page")
        })
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('#address_delivery > :nth-child(4)').then((address) => {
            var addresstext = address.text()
            expect(addresstext).include("135 New Mohanpura")
        })
        cy.get("#product-2").should("contain.text", "Men Tshirt")
        //Enter in Text area
        cy.get("textarea[name='message']").type("This is my order using Cypress Automation")
        cy.get(".btn.btn-default.check_out").click()
        cy.get("input[name='name_on_card']").type("Prikshit")
        cy.get("input[name='card_number']").type("1234 45677 4342")
        cy.get("input[placeholder='ex. 311']").clear().type("213")
        cy.get("input[placeholder='MM']").clear().type("08")
        cy.get("input[placeholder='YYYY']").clear().type("2025")
        cy.get("#submit").click().then(() => {
            cy.wait(500)

        })

        cy.get(".container .row div[class='col-sm-9 col-sm-offset-1'] p").should("include.text", "Congratulations! Your order has been confirmed!")
        cy.get("a[href='/delete_account']").click()
        cy.get("[data-qa='account-deleted']>b").should("include.text", "Account Deleted!")
        cy.get(".btn.btn-primary").click()
    })
    it("16: Place Order: Login before Checkout", function () {
        //home page visibility
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("have.text", " Home").and("be.visible")
        cy.get("a[href='/login']").click()
        cy.get("input[data-qa='login-email']").type("pvermatt1@gmail.com")
        cy.get("input[placeholder='Password']").type("Prik@123")
        cy.get("button[data-qa='login-button']").click()
        //Verify 'Logged in as username' at top
        cy.get("div>ul >li:nth-child(10)>a").should("be.visible").and("have.text", ' Logged in as Pverma')
        //add product to the cart
        cy.get("h2[class='title text-center']").invoke("show").then(() => {
            cy.get(" div.col-sm-4:nth-child(4) div.product-image-wrapper div.single-products div.product-overlay div.overlay-content > a.btn.btn-default.add-to-cart:nth-child(3)").click({ force: true })


        })
        cy.get("a:nth-child(1) > u:nth-child(1)").click()
        cy.url().should("include", "/view_cart").then(() => {
            cy.log("You are at view cart page")
        })
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('#address_delivery > :nth-child(4)').then((address) => {
            var addresstext = address.text()
            expect(addresstext).include("135 New Mohanpura")
        })
        cy.get("#product-2").should("contain.text", "Men Tshirt")
        //Enter in Text area
        cy.get("textarea[name='message']").type("This is my order using Cypress Automation")
        cy.get(".btn.btn-default.check_out").click()
        cy.get("input[name='name_on_card']").type("Prikshit")
        cy.get("input[name='card_number']").type("1234 45677 4342")
        cy.get("input[placeholder='ex. 311']").clear().type("213")
        cy.get("input[placeholder='MM']").clear().type("08")
        cy.get("input[placeholder='YYYY']").clear().type("2025")
        cy.get("#submit").click().then(() => {
            cy.wait(2000)

        })

        cy.get(".container .row div[class='col-sm-9 col-sm-offset-1'] p").should("include.text", "Congratulations! Your order has been confirmed!")
        // Delete account test cases
        // cy.get("a[href='/delete_account']").click()
        // cy.get("[data-qa='account-deleted']>b").should("include.text", "Account Deleted!")
        // cy.get(".btn.btn-primary").click()
        cy.get("[data-qa='continue-button']").click()
    })
    it("17: Remove Products From Cart", function () {
        //Verify home page is visible
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("have.text", " Home").and("be.visible")

        // Add product
        cy.get("h2[class='title text-center']").invoke("show").then(() => {
            cy.get(" div.col-sm-4:nth-child(4) div.product-image-wrapper div.single-products div.product-overlay div.overlay-content > a.btn.btn-default.add-to-cart:nth-child(3)").click({ force: true })


        })
        cy.get("a:nth-child(1) > u:nth-child(1)").click()
        cy.url().should("include", "/view_cart").then(() => {
            cy.log("You are at view cart page")
        })

        cy.get(".fa.fa-times").click().then(() => {
            cy.wait(2000)
        })
        cy.get(".fa.fa-times").should("not.exist").then(() => {
            cy.log("product is removed from the cart")

        })

    })

    it("18: View Category Products", function () {

        cy.get("div:nth-child(1) > div:nth-child(1) > h2:nth-child(1)").should("be.visible").and("have.text", "Category")
        cy.get(" div:nth-child(1) > div:nth-child(1) > h4:nth-child(1) > a:nth-child(1)").click()
        cy.get("a[href='/category_products/1']").click()
        cy.url().should("include", "/category_products/1").then(() => {
            cy.log("You are at Women dress product page")

        })
        cy.get(".title.text-center").should("have.text", "Women - Dress Products")
        //left side bar men category click
        cy.get("div:nth-child(2) >div:nth-child(1) > h4:nth-child(1) > a:nth-child(1)").click()
        cy.get("a[href='/category_products/6']").click()
        cy.get(".title.text-center").should("have.text", "Men - Jeans Products").then(() => {
            cy.log("You are ar Mens' Jeans Product page")
        })
    })
    it("19: View & Cart Brand Products", function () {
        cy.get("a[href='/products']").click()
        cy.get("div[class='brands_products'] h2").should("be.visible").and("have.text", "Brands")
        cy.get("a[href='/brand_products/H&M']").click()
        cy.url().should("include", "/brand_products/H&M").then(() => {
            cy.log("User is navigated to brand page")
        })
        cy.get(".title.text-center").should("have.text", "Brand - H&M Products").then(() => {
            cy.log("You are at H&M Products page")
        })
        cy.get("a[href='/brand_products/Madame']").click()
        cy.get(".title.text-center").should("have.text", "Brand - Madame Products").then(() => {
            cy.log("User is navigated to Brand - Madame products page")
        })
    })
    it("20: Search Products and Verify Cart After Login", function () {
        cy.get("a[href='/products']").click()
        cy.url().should("include", "/products")
        cy.get("div.features_items > h2.title.text-center:nth-child(1)").should("have.text", "All Products").then(() => {
            cy.log("user is navigated to ALL PRODUCTS page successfully")
        })
        cy.get("#search_product").type("Top")
        cy.get("#submit_search").click()
        cy.get(".title.text-center").should("have.text", "Searched Products")
        cy.wait(2000)
        cy.get('.productinfo.text-center a').each(($el) => {
            var searchText = $el.text()
            if (searchText.includes("Top")) {
                cy.get($el).click({ multiple: true })
            }
        })
        cy.get(" li:nth-child(3) > a:nth-child(1)").eq(0).click()
    })
    it("21: Add review on product", function () {
        cy.get("a[href='/products']").click()
        cy.get(".title.text-center").should("have.text", "All Products").then(() => {
            cy.log("You are at all products page")
        })
        cy.get("a[href='/product_details/1']").click()
        cy.get("a[href='#reviews']").should("be.visible").and("have.text", "Write Your Review")
        cy.get("#name").type("Prikshit")
        cy.get("#email").type("pverma@gmail.com")
        cy.get("#review").type("I am writing review in this box for automation testing")
        cy.get("#button-review").click()
        cy.get("div[class='alert-success alert'] span").invoke("show").should("have.text", "Thank you for your review.")

    })
    it("22: Add to cart from Recommended items", function () {
        cy.scrollTo('bottom')
        cy.get("div[class='recommended_items'] h2[class='title text-center']").should("be.visible").and("have.text", "recommended items")
        //Cliking on first product on window
        cy.get("div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) a").eq(0).click({ force: true })
        cy.get(" p:nth-child(2) > a:nth-child(1) > u:nth-child(1)").click()
        cy.get("a[href='/product_details/1']").should("have.text", "Blue Top")
    })
    it("23: Verify address details in checkout page", function () {

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get("input[placeholder='Name']").type("PVerma")
        cy.get("input[data-qa='signup-email']").type("pvermatest14@gmail.com")
        cy.get("button[data-qa='signup-button']").click({ multiple: true })
        cy.get('#id_gender1').check().should("be.checked")
        cy.get('#password').type("Prik@123")
        cy.get("select[id='days']").select("8")
        cy.get("div[id='uniform-months'] > select").select("January")
        cy.get("div[id='uniform-years'] > select").select("1994")
        cy.get("#newsletter").check().should("be.checked")
        cy.get("#optin").check().should("be.checked")
        cy.get("#first_name").type("Prikshit")
        cy.get("#last_name").type("Verma")
        cy.get("#company").type("P.S. Intelegencia Analytics Pvt. Ltd.")
        cy.get("#address1").type("135 New Mohanpura")
        cy.get("#address2").type("CCS Colony")
        //dropdown select India
        cy.get("#country").each(($el) => {

            if ($el.text === "India") {
                cy.wrap($el).select()
            }
        })

        cy.get("#state").type("Uttarakhand")
        cy.get("#city").type("Roorkee")
        cy.get("#zipcode").type("201306")
        cy.get("#mobile_number").type("12345678")
        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should("be.visible").and("have.text", "Account Created!")
        cy.get('[data-qa="continue-button"]').click()
        cy.get("h2[class='title text-center']").invoke("show").then(() => {
            cy.get(" div.col-sm-4:nth-child(4) div.product-image-wrapper div.single-products div.product-overlay div.overlay-content > a.btn.btn-default.add-to-cart:nth-child(3)").click({ force: true })
        })
        cy.get(" p:nth-child(2) > a:nth-child(1) > u:nth-child(1)").click()
        cy.url().should("include", "/view_cart").then(() => {
            cy.log("You are ar cart page")

        })
        cy.get(".btn.btn-default.check_out").click()

        cy.get('#address_delivery > :nth-child(4)').then((address) => {
            var addresstext1 = address.text()
            expect(addresstext1).include("135 New Mohanpura")
            cy.log("the delivery address is same address filled at the time registration of account")
        })
        cy.get('#address_invoice > :nth-child(4)').then((address2) => {
            var addresstext2 = address2.text()
            expect(addresstext2).include("135 New Mohanpura")
            cy.log("the billing address is same address filled at the time registration of account")
        })


        //Delete account test cases
        cy.get("a[href='/delete_account']").click()
        cy.get("[data-qa='account-deleted']>b").should("include.text", "Account Deleted!")
        cy.get(".btn.btn-primary").click()
    })
    it("24: Verify address details in checkout page", function () {
        //Home page visible
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("have.text", " Home").and("be.visible")

        cy.get("h2[class='title text-center']").invoke("show").then(() => {
            cy.get(" div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3)").click({ force: true })
        })
        cy.get(" a:nth-child(1) > u:nth-child(1)").click()
        cy.url().should("include", "/view_cart").then(() => {
            cy.log("You are ar cart page")
        })
        cy.get(".btn.btn-default.check_out").click()
        cy.get("a:nth-child(1) > u:nth-child(1)").click()
        // account creation 
        cy.get("input[placeholder='Name']").type("PVerma")
        cy.get("input[data-qa='signup-email']").type("pvermatest24@gmail.com")
        cy.get("button[data-qa='signup-button']").click({ multiple: true })
        cy.get('#id_gender1').check().should("be.checked")
        cy.get('#password').type("Prik@123")
        cy.get("select[id='days']").select("8")
        cy.get("div[id='uniform-months'] > select").select("January")
        cy.get("div[id='uniform-years'] > select").select("1994")
        cy.get("#newsletter").check().should("be.checked")
        cy.get("#optin").check().should("be.checked")
        cy.get("#first_name").type("Prikshit")
        cy.get("#last_name").type("Verma")
        cy.get("#company").type("P.S. Intelegencia Analytics Pvt. Ltd.")
        cy.get("#address1").type("135 New Mohanpura")
        cy.get("#address2").type("CCS Colony")
        //dropdown select India
        cy.get("#country").each(($el) => {

            if ($el.text === "India") {
                cy.wrap($el).select()
            }
        })

        cy.get("#state").type("Uttarakhand")
        cy.get("#city").type("Roorkee")
        cy.get("#zipcode").type("201306")
        cy.get("#mobile_number").type("12345678")
        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should("be.visible").and("have.text", "Account Created!")
        cy.get('[data-qa="continue-button"]').click()
        cy.get("ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").eq(0).click()
        cy.get(".btn.btn-default.check_out").click()
        cy.get('#address_delivery > :nth-child(4)').then((address) => {
            var addresstext1 = address.text()
            expect(addresstext1).include("135 New Mohanpura")
        })
        cy.get("a[href='/product_details/1']").should("have.text", "Blue Top").then(() => {
            cy.log("Order reviewed")
        })
        cy.get("textarea[name='message']").type("This is my order using Cypress Automation")
        cy.get(".btn.btn-default.check_out").click()
        cy.get("input[name='name_on_card']").type("Prikshit")
        cy.get("input[name='card_number']").type("1234 45677 4342")
        cy.get("input[placeholder='ex. 311']").clear().type("213")
        cy.get("input[placeholder='MM']").clear().type("08")
        cy.get("input[placeholder='YYYY']").clear().type("2025")
        cy.get("#submit").click().then(() => {
            cy.wait(2000)

        })
        cy.get(".container .row div[class='col-sm-9 col-sm-offset-1'] p").should("include.text", "Congratulations! Your order has been confirmed!")

        cy.get('.col-sm-9 > .btn-default').click().then(() => {
            cy.readFile("cypress/downloads/invoice.txt").should('contain', 'Hi Prikshit Verma, Your total purchase amount is 500. Thank you')
        })

        cy.get('.col-sm-9 > .btn-default').click()

        //Delete account test cases
        cy.get("a[href='/delete_account']").click()
        cy.get("[data-qa='account-deleted']>b").should("include.text", "Account Deleted!")
        cy.get(".btn.btn-primary").click()

    })

    it("25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality", function () {
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("have.text", " Home").and("be.visible")
        cy.scrollTo('bottom')
        cy.get("div[class='single-widget'] h2").should("have.text", "Subscription")
        cy.get(".fa.fa-angle-up").click()
        cy.window().its("scrollY").should("eq", 0).then(() => {
            cy.log("page is scrolled up")
        });
        cy.get("div[class='item active'] div[class='col-sm-6'] h2").should("have.text", "Full-Fledged practice website for Automation Engineers")

    })

    it("26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality", function () {
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("have.text", " Home").and("be.visible")
        cy.scrollTo('bottom')
        cy.get("div[class='single-widget'] h2").should("have.text", "Subscription")
        cy.scrollTo('top')
        cy.window().its("scrollX").should("eq", 0).then(() => {
            cy.log("page is scrolled up")
        })
        cy.get("div[class='item active'] div[class='col-sm-6'] h2").should("have.text", "Full-Fledged practice website for Automation Engineers")

    })
})


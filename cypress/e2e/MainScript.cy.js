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
import OrderPlacePage from "../PageObjects/OrderPlacePage"

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
const orderplace = new OrderPlacePage()
describe("Test Suite", function () {
    beforeEach(function () {
        cy.visit("https://automationexercise.com/")
    })

    it.only("1. Register User", function () {

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
        home.verifyLoginAsText().and("have.text", ' Logged in as PVerma')
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
        contactus.getEmail("pverma66@gmail.com")
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
    it("14: Place Order: Register while Checkout", function () {
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
        login.getSignupEmail("pvermatest13@gmail.com")
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
        //
        home.verifyLoginAsText().and("have.text", ' Logged in as PVerma')
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
        home.verifyHomePageVisibility()

        home.getSignupLoginButton()
        login.getSignupName("PVerma")
        login.getSignupEmail("pvermatest1390@gmail.com")
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

        home.verifyLoginAsText().and("have.text", ' Logged in as PVerma')
        //add product2 to the cart
        products.addSecondItemToTheCart()
        home.getCartButton()
        cartpage.verifyViewCartPageNavigation()
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
        payment.getPayAndConfirmOrderButton()
        payment.verifyOrderConfirmationText()
        //delete account
        home.getDeleteAccountButton()
        home.verifyAccountDeleteText()
        home.getAccountDeleteContinueButton()
    })
    it("16: Place Order: Login before Checkout", function () {
        //home page visibility
        home.verifyHomePageVisibility()
        home.getSignupLoginButton()
        //login test case
        login.getLoginEmail("pverma@gmail.com")
        login.getLoginPassword("Prik@123")
        login.getLoginButton()
        //Verify 'Logged in as username' at top
        home.verifyLoginAsText().and("have.text", ' Logged in as Pverma')
        //add product to the cart
        products.addSecondItemToTheCart()
        home.getCartButton()
        cartpage.verifyViewCartPageNavigation()
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
        payment.getPayAndConfirmOrderButton()
        payment.verifyOrderConfirmationText()
        orderplace.getContinueButton()
        home.getLogoutButton()
    })
    it("17: Remove Products From Cart", function () {
        //Verify home page is visible
        home.verifyHomePageVisibility()
        // Add second product 
        products.addSecondItemToTheCart()
        products.getViewCartOnPrompt()
        cartpage.verifyViewCartPageNavigation()

        cartpage.getRemoveProductButton().click().then(() => {
            cy.wait(2000)
        })
        cartpage.verifyProductRemovedFromCart()
    })

    it("18: View Category Products", function () {
        // Verify Category Text
        products.verifyCategoryText()
        //click on women tag
        products.getWomenCategory()
        //click on Women Dress Category
        products.getWomenDress()
        productdetails.verifyWomenDressPageNavigation()
        productdetails.verifyWomenDressTitle()
        //left side bar men category click
        products.getMenCategory()
        products.getMenJeans()
        productdetails.verifyMenJeansTitle()
    })
    it("19: View & Cart Brand Products", function () {
        home.getProductsButton()
        products.getBrandsCategory()
        products.getHnM()
        productdetails.verifyHnMPageNavigation()
        productdetails.verifyHnMTitle()
        products.getMadame()
        productdetails.verifyMadameTitle()
    })
    it("20: Search Products and Verify Cart After Login", function () {
        home.getProductsButton()
        products.verifyProductPageNavigation()
        products.getSearchProduct("Top")
        products.getSubmitSearch()
        products.verifySearchedProductTitle()
        cy.wait(2000)
        products.addSearchedProducts()
        home.getCartButton()
        home.getSignupLoginButton()
        login.getLoginEmail("pshop@gmail.com")
        login.getLoginPassword("Prik@123")
        login.getLoginButton()
        home.getCartButton()
        //get quantity of added items
        cartpage.verifyQuantityofItems()

        //add remove multiple product from cart logic here(Pending)
    })
    it("21: Add review on product", function () {
        home.getProductsButton()
        products.verifyProductPageNavigation()
        products.getViewProduct1Button()
        productdetails.verifyWriteYourReviewText()
        productdetails.getReviewName("Prikshit")
        productdetails.getReviewEmail("pverma@gmail.com")
        productdetails.getReviewBox("This is a test message")
        productdetails.getSubmitReviewButton()
        productdetails.verifyReviewMessage()
    })
    it("22: Add to cart from Recommended items", function () {
        cy.scrollTo('bottom')
        home.verifyRecommendedItemsTitle()
        //Cliking on first product on window
        home.addFirstItemFromRecommendedItems()
        products.getViewCartOnPrompt()
        cartpage.verifyProduct1Text()
    })
    it("23: Verify address details in checkout page", function () {

        home.getSignupLoginButton()
        //Signing up
        login.getSignupName("PVerma")
        login.getSignupEmail("pvermatest14@gmail.com")
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
        home.addProductFromTile()
        cartpage.getRegisterLoginButtonOnPrompt()
        cartpage.verifyViewCartPageNavigation()
        cartpage.getProceedToCheckoutButton()
        //verify delivery address
        checkoutpage.verifyAddress().then(() => {
            cy.log("the delivery address is same address filled at the time registration of account")
        })
        checkoutpage.verifyInvoiceAddress().then(() => {
            cy.log("the billing address is same address filled at the time registration of account")
        })

        //Delete account test cases
        home.getDeleteAccountButton()
        home.verifyAccountDeleteText()
        home.getAccountDeleteContinueButton()
    })
    it("24: Verify address details in checkout page", function () {
        //Home page visible
        home.verifyHomePageVisibility()
        home.addProduct1FromFeaturesItems()
        products.getViewCartOnPrompt()
        cartpage.verifyViewCartPageNavigation()
        cartpage.getProceedToCheckoutButton()
        cy.get("a:nth-child(1) > u:nth-child(1)").click()
        // account creation 
        login.getSignupName("PVerma")
        login.getSignupEmail("pvermatest67@gmail.com")
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
        home.getCartButton()
        checkoutpage.getPlaceOrderButton()
        checkoutpage.verifyAddress()
        cartpage.verifyOrderReview()
        //place order 
        checkoutpage.getOrderDescriptionBox("This is my order using Cypress Automation")
        checkoutpage.getPlaceOrderButton()
        payment.getNameOnCard("Prikshit")
        payment.getCardNumber("1234 45677 4342")
        payment.getCVV("213")
        payment.getExpirationDate("08")
        payment.getExpirationYear("2025")
        payment.getPayAndConfirmOrderButton()
        payment.verifyOrderConfirmationText()
        //verify Download file data
        orderplace.verifyFileDownloadData()
        orderplace.getContinueButton()
        //Delete account test cases
        home.getDeleteAccountButton()
        home.verifyAccountDeleteText()
        home.getAccountDeleteContinueButton()

    })

    it("25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality", function () {
        home.verifyHomePageVisibility()
        cy.scrollTo('bottom')
        home.verifySubscriptionText()
        home.getArrowButton()
        home.verifyPageScrollUpArrow()
        home.verifyFullFledgedPracticeText()
    })

    it("26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality", function () {
        home.verifyHomePageVisibility()
        cy.scrollTo('bottom')
        home.verifySubscriptionText()
        cy.scrollTo('top')
        home.verifyScrollUpWithoutArrow()
        home.verifyFullFledgedPracticeText()
    })
})


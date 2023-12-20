/// <reference types="Cypress" />

describe("Test Suite", function () {
    let length
    let Price1
    let Price2
    let quantity1
    let quantity2
    let TotalPrice1
    let TotalPrice2

    this.beforeEach(function () {
        cy.visit("https://automationexercise.com/")
    })

    it("1. Register User", function () {

        // Verify home page visibility
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("be.visible").and("have.text", " Home")

        //Click on 'Signup / Login' button
        cy.get("a[href='/login']").click()
        // Verify 'New User Signup!' is visible
        cy.get("div[class='signup-form'] h2").and("have.text", "New User Signup!")
        //Enter name and email address and click on signup button
        cy.get("input[type='text']").type("PVerma")
        cy.get("input[data-qa='signup-email']").type("pvermat4@gmail.com")
        cy.get("button[data-qa='signup-button']").click({ multiple: true })
        cy.get("div[class='login-form'] >h2 >b:nth-child(1)").should("be.visible").and("have.text", "Enter Account Information")
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
        cy.get("#zipcode").type("302134")
        cy.get("#mobile_number").type("123456566")
        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should("be.visible").and("have.text", "Account Created!")
        cy.get('[data-qa="continue-button"]').click()
        cy.get("div>ul >li:nth-child(10)>a").should("be.visible").and("have.text", ' Logged in as PVerma')
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

        cy.get("div>h2>b").should("be.visible").and("have.text", "Account Deleted!")
        cy.get("div>a[class='btn btn-primary']").click().then(function () {
            cy.log("Account Deleted Successfully")
        })




    })

    it("2. Login User with correct email and password", function () {
        //Verify home page visibility
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("be.visible").and("have.text", " Home")

        //Click on 'Signup / Login' button
        cy.get("a[href='/login']").click()
        cy.get("div[class='login-form']>h2").should("be.visible").and("have.text", "Login to your account")
        cy.get("input[data-qa='login-email']").type("pverma12@gmail.com")
        cy.get("input[data-qa='login-password']").type("Prik@123")
        cy.get("button[data-qa='login-button']").click()
        cy.get("div>ul >li:nth-child(10)>a").should("be.visible").and("have.text", ' Logged in as PVerma')
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.get("div>h2>b").should("be.visible").and("have.text", "Account Deleted!")
        cy.get("div>a[class='btn btn-primary']").click().then(function () {
            cy.log("Account Deleted Successfully")
        })


    })

    it("3. Login User with incorrect email and password", function () {
        // Verify home page visibility
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("be.visible").and("have.text", " Home")
        //Click on 'Signup / Login' button
        cy.get("a[href='/login']").click()
        cy.get("div[class='login-form']>h2").should("be.visible").and("have.text", "Login to your account")
        cy.get("input[data-qa='login-email']").type("pverma08@gmail.com")
        cy.get("input[data-qa='login-password']").type("Prik@12")
        cy.get("button[data-qa='login-button']").click()
        cy.get(".login-form > form > p").should("be.visible").and("have.text", "Your email or password is incorrect!")


    })

    it("4. Logout User", function () {
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("be.visible").and("have.text", " Home")
        //Click on 'Signup / Login' button
        cy.get("a[href='/login']").click()
        cy.get("div[class='login-form']>h2").should("be.visible").and("have.text", "Login to your account")
        cy.get("input[data-qa='login-email']").type("pverma@gmail.com")
        cy.get("input[data-qa='login-password']").type("Prik@123")
        cy.get("button[data-qa='login-button']").click()
        cy.get("a[href='/logout']").click()
        cy.url().should('eq', 'https://automationexercise.com/login').then(function () {
            cy.log("user is navigated to login page")
        })


    })

    it("5: Register User with existing email", function () {
        // Verify home page visibility
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("have.text", " Home").and("be.visible")

        //Click on 'Signup / Login' button
        cy.get("a[href='/login']").click()
        // Verify 'New User Signup!' is visible
        cy.get("div[class='signup-form'] h2").and("have.text", "New User Signup!")
        //Enter name and email address and click on signup button
        cy.get("input[type='text']").type("PVerma")
        cy.get("input[data-qa='signup-email']").type("pverma12@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.get("p:nth-child(5)").should("have.text", "Email Address already exist!").and("be.visible")
    })
    it("6: Contact Us Form", function () {
        // Verify home page visibility
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("have.text", " Home").and("be.visible")
        cy.get("a[href='/contact_us']").click()
        cy.get("div[class='contact-form']>h2[class='title text-center']").should("be.visible").and("have.text", "Get In Touch")
        cy.get("input[placeholder='Name']").type("Prikshit")
        cy.get("input[placeholder='Email']").type("pverma6@gmail.com")
        cy.get("input[placeholder='Subject']").type("I want to automate this site")
        cy.get("#message").type("This is a meggage for you. That I am a good person.")
        cy.get("input[name='upload_file']").selectFile("cypress/fixtures/upload.doc")
        cy.get("input[value='Submit']").click()
        cy.get("div[class='status alert alert-success']").should("have.text", "Success! Your details have been submitted successfully.")

    })

    it("7: Verify Test Cases Page", function () {
        // Verify home page visibility
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("have.text", " Home").and("be.visible")
        cy.get("ul[class='nav navbar-nav']> li:nth-child(5)> a[href='/test_cases']").click()
        cy.url().should("include", "/test_cases").then(function () {
            cy.log("User is navigated to test cases page successfully")
        })
    })
    it("8: Verify All Products and product detail page", function () {
        // Verify home page visibility
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("have.text", " Home").and("be.visible")
        cy.get("a[href='/products']").click()
        cy.url().should("include", "/products").then(function () {
            cy.log("User is navigated to ALL PRODUCTS page successfully")
        })

        // clicking on view product button
        cy.get("a[href = '/product_details/1']").click()
        cy.get("div[class='product-information'] h2").should("be.visible").then(function () {
            cy.log("Product Name is visible")
        })
        cy.get(" div:nth-child(1) > p:nth-child(3)").should("be.visible").then(function () {
            cy.log("'category' is visible")
        })
        cy.get("div[class='product-information'] span span").should("be.visible").then(function () {
            cy.log("'price' is visible")
        })
        cy.get(" p:nth-child(6) > b:nth-child(1)").should("be.visible").then(function () {
            cy.log("'Availability' is visible")
        })
        cy.get(" p:nth-child(7) > b:nth-child(1)").should("be.visible").then(function () {
            cy.log(" 'Condition' is visible")
        })
        cy.get(" p:nth-child(8) > b:nth-child(1)").should("be.visible").then(function () {
            cy.log(" 'Brand' is visible")
        })
    })
    it("9: Search Product", function () {
        // Verify home page visibility
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("have.text", " Home").and("be.visible")
        cy.get("a[href='/products']").click()
        cy.url().should("include", "/products").then(function () {
            cy.log("User is navigated to ALL PRODUCTS page successfully")

        })
        cy.get("#search_product").type("Blue Top")
        cy.get("#submit_search").click()


        cy.get(" div:nth-child(1) > p:nth-child(3)").should("be.visible").and("have.text", "Blue Top").then(() => {
            cy.log("'SEARCHED PRODUCTS' is visible ")
        })
        cy.get("div[class='col-sm-4']>.product-image-wrapper p:nth-child(3)").should("include.text", "Blue").then(() => {
            cy.log("all the products related to search are visible")
        })

    })
    it("10: Verify Subscription in home page", () => {
        // Verify home page visibility
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("have.text", " Home").and("be.visible")

        cy.get("#footer").scrollIntoView()
        cy.get("div[class='single-widget'] h2").should("have.text", "Subscription")
        cy.get("#susbscribe_email").type("pverma@gmail.com")
        cy.get(".fa.fa-arrow-circle-o-right").click()
        cy.get('.alert-success').should("exist").and("have.text", "You have been successfully subscribed!")
    })

    it("11: Verify Subscription in Cart page", () => {
        // Verify home page visibility
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("have.text", " Home").and("be.visible")
        cy.get("div>ul[class='nav navbar-nav'] :nth-child(3) >a").click()
        cy.get("#footer").scrollIntoView()
        cy.get("#susbscribe_email").type("pverma@gmail.com")
        cy.get(".fa.fa-arrow-circle-o-right").click()
        cy.get('.alert-success').should("exist").and("have.text", "You have been successfully subscribed!")
    })
    it("12: Add Products in Cart", () => {

        // Verify home page visibility
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("have.text", " Home").and("be.visible")
        cy.get("a[href='/products']").click()

        //adding first item in the cart
        cy.get("h2[class='title text-center']").invoke("show").then(() => {
            cy.get(" div.col-sm-4:nth-child(3) div.product-image-wrapper div.single-products div.product-overlay div.overlay-content a.btn.btn-default.add-to-cart:nth-child(3)").click({ force: true })


        })
        cy.get(" button.btn.btn-success.close-modal.btn-block").click()
        //adding second item in the cart
        cy.get("h2[class='title text-center']").invoke("show").then(() => {
            cy.get(" div.col-sm-4:nth-child(4) div.product-image-wrapper div.single-products div.product-overlay div.overlay-content > a.btn.btn-default.add-to-cart:nth-child(3)").click({ force: true })


        })
        cy.get("div[class='modal-content']> :nth-child(2) >p:nth-child(2) >a").click()
        cy.get("#product-1").should("contain.text", "Blue Top").then(() => {
            cy.log("First Product Added to the cart")
        })
        cy.get("#product-2").should("contain.text", "Men Tshirt").then(() => {
            cy.log("Second Product Added to the cart")
        })
        //Verify added product's prices, quantity and total price

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


    })
    it("13: Verify Product quantity in Cart", function () {
        // Verify home page visibility
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("have.text", " Home").and("be.visible")
        cy.get("a[href='/products']").click()
        cy.get("ul.nav.nav-pills.nav-justified li:nth-child(1) > a:nth-child(1)").eq(1).click()
        cy.get("#quantity").type('{selectall}{backspace}').type("6").then(() => {
            cy.get("button[type='button']").click()
        })
        cy.get(" a:nth-child(1) > u:nth-child(1)").click()
        cy.get(".disabled").then((prodQuant) => {
            var prodQuanttext = prodQuant.text()
            expect(Number(prodQuanttext)).to.equal(6)
        })

    })
    it("14: Place Order: Register while Checkout", function () {
        // Verify home page visibility
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should("have.text", " Home").and("be.visible")
        cy.get("h2[class='title text-center']").invoke("show").then(() => {
            cy.get(" div.col-sm-4:nth-child(4) div.product-image-wrapper div.single-products div.product-overlay div.overlay-content > a.btn.btn-default.add-to-cart:nth-child(3)").click({ force: true })


        })
        cy.get("a:nth-child(1) > u:nth-child(1)").click()
        cy.url().should("include", "/view_cart").then(() => {
            cy.log("You are at view cart page")
        })
        cy.get(".btn.btn-default.check_out").click()
        cy.get("a:nth-child(1) > u:nth-child(1)").click()
        //signup
        cy.get("input[type='text']").type("PVerma")
        cy.get("input[data-qa='signup-email']").type("pvermatest10@gmail.com")
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
        cy.get('body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)').should("include.text", "Your account has been permanently deleted!")
        cy.get(".btn.btn-primary").click()


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


})


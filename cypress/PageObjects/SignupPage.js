class SignupPage {

    verifyEnterAccountInformationText() {
        return cy.get("div[class='login-form'] >h2 >b:nth-child(1)").should("be.visible").and("have.text", "Enter Account Information")

    }
    getTitle() {
        return cy.get('#id_gender1').check().should("be.checked")
    }
    getPassword(pass) {
        cy.get('#password').type(pass)
    }
    //D.O.B 
    getDay(day) {
        cy.get("select[id='days']").select(day)
    }
    getMonth(month) {
        cy.get("div[id='uniform-months'] > select").select(month)
    }
    getYear(year) {
        cy.get("div[id='uniform-years'] > select").select(year)
    }
    getNewsletterCheckbox() {
        return cy.get("#newsletter").check().should("be.checked")
    }
    getSpecialoffersCheckbox() {
        return cy.get("#optin").check().should("be.checked")
    }
    getFirstname(fname) {
        cy.get("#first_name").type(fname)
    }
    getLastname(lname) {
        cy.get("#last_name").type(lname)
    }
    getCompanyName(cname) {
        cy.get("#company").type(cname)
    }
    getAddress1(address1) {
        cy.get("#address1").type(address1)
    }
    getAddress2(address2) {
        cy.get("#address2").type(address2)
    }
    getCountryDropdown() {
        return cy.get("#country").each(($el) => {

            if ($el.text === "India") {
                cy.wrap($el).select()
            }
        })
    }
    getState(state) {
        cy.get("#state").type(state)
    }
    getCity(city) {
        cy.get("#city").type(city)
    }
    getZipcode(zipcode) {
        cy.get("#zipcode").type(zipcode)
    }
    getMobilenumber(mobile) {
        cy.get("#mobile_number").type(mobile)
    }
    getCreateAccountButton() {
        return cy.get('[data-qa="create-account"]').click()
    }
    verifyAccoutCreatedText() {
        return cy.get('b').should("be.visible").and("have.text", "Account Created!")
    }
    getAccountCreatedContinueButton() {
        return cy.get('[data-qa="continue-button"]').click()
    }
}
export default SignupPage;
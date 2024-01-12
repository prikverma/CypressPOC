class ContactUsPage {

    verifyGetInTouchText() {
        return cy.get("div[class='contact-form']>h2[class='title text-center']").should("be.visible").and("have.text", "Get In Touch")

    }
    getName(name) {
        cy.get("input[placeholder='Name']").type(name)
    }
    getEmail(email) {
        cy.get("input[placeholder='Email']").type(email)
    }
    getSubject(subject) {
        cy.get("input[placeholder='Subject']").type(subject)
    }
    getMessage(message) {
        cy.get("#message").type(message)
    }
    getUploadButton() {
        return cy.get("input[name='upload_file']").selectFile("cypress/fixtures/upload.doc")
    }
    getSubmitButton() {
        return cy.get("input[value='Submit']").click()
    }
    verifyFilesSuccessMessage() {
        return cy.get("div[class='status alert alert-success']").should("have.text", "Success! Your details have been submitted successfully.")

    }
}
export default ContactUsPage;
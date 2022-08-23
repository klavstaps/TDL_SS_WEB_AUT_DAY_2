import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get nameField() {
    return cy.get("input[placeholder='Full Name']");
  }

  static get emailField() {
    return cy.get("input[placeholder='name@example.com']");
  }

  static get currentAddressField() {
    return cy.get("textarea[placeholder='Current Address']");
  }

  static get permanentAddressField() {
    return cy.get("textarea[id='permanentAddress']");
  }

  static get  submitButton() {
    return cy.get("button[class='btn btn-primary']")
  }

  static get outputName() {
    return cy.get("p[id='name']");
  }

  static get outputEmail() {
    return cy.get("p[id='email']");
  }

  static get  outputCurrentAddress() {
    return cy.get("p[id='currentAddress']");
  }
  
  static get  outputPermanentAddress() {
    return cy.get("p[id='permanentAddress']");
  }

}

export default TextBoxPage;

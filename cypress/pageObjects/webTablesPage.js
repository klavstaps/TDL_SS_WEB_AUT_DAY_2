import BasePage from "./basePage";

class webTablesPage extends BasePage {
    static get url() {
        return "/webtables"
    }

    static get addButton() {
        return cy.get("[id='addNewRecordButton']")
    }

    static get firstNameField() {
        return cy.get("input[placeholder='First Name']")
    }

    static get lastNameField() {
        return cy.get("input[placeholder='Last Name']")
    }

    static get emailField() {
        return cy.get("input[placeholder='name@example.com']")
    }

    static get ageField() {
        return cy.get("input[placeholder='Age']")
    }

    static get salaryField() {
        return cy.get("input[placeholder='Salary']")
    }

    static get departmentField() {
        return cy.get("input[placeholder='Department']")
    }

    static get submitButton() {
        return cy.get("[id='submit']")
    }

    static get searchField() {
        return cy.get("input[placeholder='Type to search']")
    }

    static get searchButton() {
        return cy.get("[class='input-group-append']")
    }

    static get rows() {
        return cy.get(`.rt-tbody [role="row"]:not(.-padRow)`);
    }

    static getRow(itemName) {
        return this.rows.contains(itemName).parent();
    }
    
    static deleteUser(userName) {
        return this.rows
          .contains(userName)
          .parent()
          .find("[title='Delete']")
          .click();
    }



}


export default webTablesPage;
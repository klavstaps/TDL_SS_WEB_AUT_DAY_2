import BasePage from "./basePage";

class radioButtonPage extends BasePage {
    static get url() {
        return "/radio-button"
    }

    static get yesButton() {
        return cy.get("[for='yesRadio']")
    }

    static get outputRadioSelected() {
        return cy.get("[class='mt-3']")
    }
    
    static get impressiveButton() {
        return cy.get("[for='impressiveRadio']")
    }

    static get noButton() {
        return cy.get("[id='noRadio']")
    }
}

export default radioButtonPage;
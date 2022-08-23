import BasePage from "./basePage";

class buttonsPage extends BasePage {
    static get url() {
        return "/buttons"
    }

    static get doubleClickBtn() {
        return cy.get("[id='doubleClickBtn']");
    }

    static get doubleClickMessage() {
        return cy.get("[id='doubleClickMessage']");
    }

    static get rightClickBtn() {
        return cy.get("[id='rightClickBtn']");
    }

    static get rightClickMessage() {
        return cy.get("[id='rightClickMessage']")
    }

    static get dynamicClickBtn() {
        return cy.get(".mt-4:nth-child(3)>button")
    }

    static get dynamicClickMessage() {
        return cy.get("[id='dynamicClickMessage']")
    }
}


export default buttonsPage;
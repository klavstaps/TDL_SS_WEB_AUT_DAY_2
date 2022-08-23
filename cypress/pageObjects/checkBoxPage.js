import BasePage from "./basePage";

class checkBoxPage extends BasePage {
    static get url() {
      return "/checkbox";
    }

    static get expandButton() {
        return cy.get("button[class='rct-option rct-option-expand-all']")
    }

    static get notesButton() {
        return cy.get("label[for='tree-node-notes']");
    }

    static get reactButton() {
        return cy.get("label[for='tree-node-react']");
    }
    static get angularButton() {
        return cy.get("label[for='tree-node-angular']");
    }
    static get generalButton() {
        return cy.get("label[for='tree-node-general']");
    }
    static get excelFileDocButton() {
        return cy.get("label[for='tree-node-excelFile']");
    }

    static get resultOutput() {
        return cy.get("div[id='result']")
    }

}

export default checkBoxPage;
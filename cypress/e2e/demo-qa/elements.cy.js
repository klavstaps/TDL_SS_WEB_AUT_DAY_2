import TextBoxPage from "../../pageObjects/textBoxPage";
import checkBoxPage from "../../pageObjects/checkBoxPage";
import radioButtonPage from "../../pageObjects/radioButtonPage";
import webTablesPage from "../../pageObjects/webTablesPage";
import buttonsPage from "../../pageObjects/buttonsPage"


context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it("Filling in Text Boxes", () => {
      // add the necessary steps
      
      //aizpildam text box laukus
      TextBoxPage.nameField.type("Kristaps");
      TextBoxPage.emailField.type("kristapsklava@test.com");
      TextBoxPage.currentAddressField.type("Riga, Latvia");
      TextBoxPage.permanentAddressField.type("Talsi, Latvia");
      // iesniedzam datus nospiezot Submit
      TextBoxPage.submitButton.click();
      // validejam iesniegtos datus pret ouput lauku
      TextBoxPage.outputName.should("contain.text", "Kristaps");
      TextBoxPage.outputEmail.should("contain.text", "kristapsklava@test.com");
      TextBoxPage.outputCurrentAddress.should("contain.text", "Riga, Latvia");
      TextBoxPage.outputPermanentAddress.should("contain.text", "Talsi, Latvia");

    });
  });

  context("Check box scenarios", () => {
    beforeEach( () => {
      checkBoxPage.visit();
    });
    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    it("Click the expand button and select defined folders and files", () => {
      checkBoxPage.expandButton.click();
      checkBoxPage.notesButton.click();
      checkBoxPage.reactButton.click();
      checkBoxPage.angularButton.click();
      checkBoxPage.generalButton.click();
      checkBoxPage.excelFileDocButton.click();
      checkBoxPage.resultOutput.should("contain.text", "notes");
      checkBoxPage.resultOutput.should("contain.text", "angular");
      checkBoxPage.resultOutput.should("contain.text", "general");
      checkBoxPage.resultOutput.should("contain.text", "excelFile");

    })
    // Click Notes, React, Angular, General, Excel File.doc
    // Validate the clicked checkboxes

    // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes
    it("Click expand button and select Office", () => {
      checkBoxPage.expandButton.click();
      checkBoxPage.officeButton.click();
      checkBoxPage.resultOutput.should("contain.text", "office");
      checkBoxPage.resultOutput.should("contain.text", "public");
      checkBoxPage.resultOutput.should("contain.text", "private");
      checkBoxPage.resultOutput.should("contain.text", "classified");
      checkBoxPage.resultOutput.should("contain.text", "general");
    })
  });

  context("Radio button scenarios", () => {
    beforeEach( () => {
      radioButtonPage.visit();
    });
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
    it("Press radio buttons", () => {
      radioButtonPage.yesButton.click();
      radioButtonPage.outputRadioSelected.should("contain.text", "Yes");
      radioButtonPage.impressiveButton.click();
      radioButtonPage.outputRadioSelected.should("contain.text", "Impressive");
      radioButtonPage.noButton.should("have.disabled", "True")
    })
  });

  context("Web tables scenarios", () => {
    beforeEach( () => {
      webTablesPage.visit();
    });
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible
    it("Web tables scenario 1", () => {
      webTablesPage.addButton.click();
      webTablesPage.firstNameField.type("Kristaps");
      webTablesPage.lastNameField.type("Klava");
      webTablesPage.emailField.type("kristaps.klava@test.com")
      webTablesPage.ageField.type("26");
      webTablesPage.salaryField.type(9999);
      webTablesPage.departmentField.type("The best department");
      webTablesPage.submitButton.click();
      webTablesPage.searchField.type("Kristaps")
      webTablesPage.searchButton.click();
      webTablesPage.rows.should("contain.text", "Kristaps");
      webTablesPage.rows.should("contain.text", "Klava");
      webTablesPage.getRow("Kristaps").should("contain","Klava");
    })

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
    it("Delete all rows", () => {
      webTablesPage.rows.should("have.length", 3);
      ["Cierra", "Alden", "Kierra"].forEach((name) => {
        webTablesPage.deleteUser(name);
      });
      webTablesPage.rows.should("have.length", 0);
    });
  });

  context("Buttons scenarios", () => {
    beforeEach( () => {
      buttonsPage.visit();
    });
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
    it("Button scenario", () => {
      buttonsPage.doubleClickBtn.dblclick();
      buttonsPage.doubleClickMessage.should("contain", "You have done a double click");
      buttonsPage.rightClickBtn.rightclick();
      buttonsPage.rightClickMessage.should("contain", "You have done a right clic");
      buttonsPage.dynamicClickBtn.click();
      buttonsPage.dynamicClickMessage.should("contain", "You have done a dynamic click")
    })
  });
});

import TextBoxPage from "../../pageObjects/textBoxPage";
import checkBoxPage from "../../pageObjects/checkBoxPage";


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
    it.only("Click the expand button and select folders and files", () => {
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
  });

  context("Radio button scenarios", () => {
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
  });

  context("Web tables scenarios", () => {
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
  });

  context("Buttons scenarios", () => {
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});

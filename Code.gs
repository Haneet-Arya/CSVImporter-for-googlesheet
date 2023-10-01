function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('CSV Utils')
      .addItem('Import CSV', 'showDialog')
      .addToUi();
}

function showDialog() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('index')
      .setWidth(800)
      .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'CSV Importer');
}

function uploadFile(fileData) {
  try {
    // Parse the CSV data
    // var csvData = Utilities.base64Decode(fileData);
    console.log(fileData);
    // var parsedData = Utilities.parseCsv(csvData, ',');

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Clear existing data (optional)
    // Populate the Google Sheet with the parsed data
    var row = sheet.getLastRow();
    row+=1;
    sheet.getRange(row, 1, fileData.length, fileData[0].length).setValues(fileData);
    
    
  } catch (e) {
    return "Error uploading file: " + e.toString();
    
  }
}

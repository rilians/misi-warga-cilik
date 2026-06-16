// Paste this code into Google Apps Script Editor

function doPost(e) {
  try {
    // Get the sheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Extract form data
    const nama = e.parameter.nama || '';
    const kelas = e.parameter.kelas || '';
    const jawaban1 = e.parameter.jawaban1 || '';
    const jawaban2 = e.parameter.jawaban2 || '';
    const jawaban3 = e.parameter.jawaban3 || '';
    const jawaban4 = e.parameter.jawaban4 || '';
    const jawaban5 = e.parameter.jawaban5 || '';
    const jawaban6 = e.parameter.jawaban6 || '';
    const jawaban7 = e.parameter.jawaban7 || '';
    const jawaban8 = e.parameter.jawaban8 || '';
    const jawaban9 = e.parameter.jawaban9 || '';
    const jawaban10 = e.parameter.jawaban10 || '';
    const skor = e.parameter.skor || '';
    
    // Add new row with data
    sheet.appendRow([
      new Date(),
      nama,
      kelas,
      jawaban1,
      jawaban2,
      jawaban3,
      jawaban4,
      jawaban5,
      jawaban6,
      jawaban7,
      jawaban8,
      jawaban9,
      jawaban10,
      skor
    ]);
    
    // Return success
    return ContentService.createTextOutput('Success');
  } catch (error) {
    return ContentService.createTextOutput('Error: ' + error.toString());
  }
}

/**
 * This function runs when the spreadsheet is open,
 * adds a custom menu to the spreadsheet.
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Fitness')
      /*
      .addSubMenu(ui.createMenu('Email Chairman & Students')
          .addItem('Begin Week','emailWeekBegin')
          .addItem('End Week','endOfWeek'))
      .addSeparator()
      */
      .addItem('Increment Diet Schedule','fnIncrementDiet')
      .addItem('Increment Workout Schedule','fnIncrementWorkout')
      .addItem('Test','fnTest')
      .addToUi();
}

function onEdit() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cell = SpreadsheetApp.getActiveRange();
  
  if(sheet.getName() == "Workout") {
    if(cell.getColumn() == 3) {
      if(cell.getValue().toUpperCase() == "Y") {
        var greenRange = sheet.getRange(cell.getRow()-4,cell.getColumn()-2,5,2);
        greenRange.setBackgroundRGB(0,128,0);
        cell.clearContent();
      }
      else if(cell.getValue().toUpperCase() == "N") {
        var grayRange = sheet.getRange(cell.getRow()-4,cell.getColumn()-2,5,sheet.getMaxColumns());
        grayRange.setBackgroundRGB(150,150,150);
        cell.clearContent();
      }
    }
  }
  
  if(sheet.getName() == "Diet") {
    if(cell.getColumn() == 33) {
      if(cell.getValue() > 500) {
        cell.setBackground('red');
      } else {
        cell.setBackground(null);
      }
    }
  }
  
  /*
  if(cell.getValue() == 'Bench'){
    Browser.msgBox('hello bench');
  }
  */
}

function fnIncrementWorkout(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Workout");
  
  var startRow = fnWorkout_findStartRow(); //find row to insert
  var numRows = 35;
  var numCols = 54;
  sheet.insertRows(startRow,numRows);
  var lastRow = sheet.getLastRow();//find row to copy from - must be done after inserting rows
  
  var templateRange = sheet.getRange(lastRow-numRows,1,numRows,numCols);
  var targetRange = sheet.getRange(startRow,1,numRows,numCols);
  templateRange.copyTo(targetRange);
  templateRange.copyFormatToRange(sheet,1,numCols,startRow,startRow+numRows);
  // resize rows
  for(i=(startRow);i<(startRow+numRows);i++){
    sheet.setRowHeight(i,12);
  }
}

function fnWorkout_findStartRow(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Workout");
  
  //find row to insert
  var daysColumn = sheet.getRange("A1:A30");
  for(i=0; i<30; i++){
    if(daysColumn.getValues()[i][0] == "M")
      break;
  }
  return i+1;
}
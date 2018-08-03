function fnIncrementDiet(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Diet");
  
  var startRow = fnDiet_findStartRowOf('Su'); //find row to insert
  var lastDate = sheet.getRange(startRow+1,2).getValue();
  
  var numRows = 23;
  var numCols = 60;
  sheet.insertRows(startRow,numRows);
  var lastRow = sheet.getLastRow();//find row to copy from - must be done after inserting rows
  
  var templateRange = sheet.getRange(lastRow-numRows,1,numRows,numCols);
  var targetRange = sheet.getRange(startRow,1,numRows,numCols);
  templateRange.copyTo(targetRange);
  templateRange.copyFormatToRange(sheet,1,numCols,startRow,startRow+numRows);
  
  var newDate = sheet.getRange(fnDiet_findStartRowOf('M')+1,2).setValue(lastDate + 1);
  
  // resize rows
  for(i=(startRow+1);i<(startRow+numRows);i+=3){
    sheet.setRowHeight(i+1,11);
    sheet.setRowHeight(i+2,11);
  }
  
  /* gave up on setting next date for now
  var nextDateRange = sheet.getRange(startRow+numRows,1,5,2);
  for(i=0; i<5; i++){
    if(nextDateRange.getValues()[i][0] == "Su"){
      Browser.msgBox("date = " + nextDateRange.getValues()[i][1]);
      Browser.msgBox("date = " + nextDateRange.getValues()[i][1]+1);
      var targetDateRange = sheet.getRange(startRow+numRows-3,2);
      targetDateRange.setValue(nextDateRange.getValues()[i][1]+1);
    }
  }
  */
}

function fnDiet_findStartRowOf(dayToFind){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Diet");
  
  //find row to insert
  var daysColumn = sheet.getRange("A1:A30");
  for(i=0; i<30; i++){
    if(daysColumn.getValues()[i][0] == dayToFind)
      break;
  }
  return i;
}
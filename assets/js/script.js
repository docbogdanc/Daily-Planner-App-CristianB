var currentDateTime = dayjs().format('[Today is : ] dddd[,] DD-MM-YYYY');
var dateElem = $('#currentDay');

dateElem.text(currentDateTime);
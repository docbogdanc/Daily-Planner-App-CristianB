var currentDateTime = dayjs().format('[Today is : ] dddd[,] DD-MM-YYYY');
var dateElem = $('#currentDay');
var blockDays = $('#container')

dateElem.text(currentDateTime);


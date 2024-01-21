var currentDate = dayjs().format('[Today is : ] dddd[,] DD-MM-YYYY');
var dateElem = $('#currentDay');
var currentTime = dayjs().format('hA');
console.log(currentTime);
var blockDays = $('.table');

// display current date at top page 
dateElem.text(currentDate);

// change color of row equal with current time
// Loop through each child element
$('.firstcolumn').each(function() {
    // go through all text value of the table' times
    var childText = $(this).text().trim();

    // Check if the time table' time text is equal to the current real time
    if (childText === currentTime) {
      // return the ID of the table row equivlent to current time
      var parentID = $(this).parent().attr('id');
    //   change the background of the row to red to mark current time
      $('#'+parentID).children().eq(1).removeClass('secondcolumn').addClass('secondcolumnRed');
    }
  });


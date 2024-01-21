var currentDate = dayjs().format('[Today is : ] dddd[,] DD-MM-YYYY');
var dateElem = $('#currentDay');
var currentTime = dayjs().format('hA');
console.log(currentTime);
var blockDays = $('.table');

// display current date at top page 
dateElem.text(currentDate);

// change color of row equal with current time and following time slots
// Loop through each child element
$('.firstcolumn').each(function() {
    // go through all text value of the table' times from first column
    var childText = $(this).text().trim();

    // Check if the time table' time text is equal to the current real time
    if (childText === currentTime) {
      // return the ID of the table row equivalent to the current time
      var currentParentID = $(this).parent().attr('id');

      // change the background of the row to red to mark current time (red row)
      $('#'+currentParentID).children().eq(1).removeClass('secondcolumn').addClass('secondcolumnRed');
    
      // calculate how many hours slot are after current one (red row)
      var numberOfSiblingsFollowingRed = $('#'+currentParentID).nextAll().length;  
      console.log(numberOfSiblingsFollowingRed);
      
      // loop through all siblings following the red row
      for (i=0 ; i<numberOfSiblingsFollowingRed ; i++) {
        // target each sibling second child and change the background to green
        $('#'+currentParentID).nextAll().eq(i).children().eq(1).removeClass('secondcolumn').addClass('secondcolumnGreen');
      }

    };

})
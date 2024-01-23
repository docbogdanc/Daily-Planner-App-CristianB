// set variables for current time and prepare alocate varibles to elements from html
var currentDate = dayjs().format('[Today is : ] dddd[,] DD-MM-YYYY');
var dateElem = $('#currentDay');
var currentTime = dayjs().format('hA');
var blockDays = $('.table');

// display current date at top page 
dateElem.text(currentDate);

// change color of the table rows according with the current and future time
// Loop through each child element
$('.firstcolumn').each(function() {
    // go through all "hours slot" from table' first column
    var childText = $(this).text().trim();

    // Check if the "hour slot" corespond to the current real time
    if (childText === currentTime) {
      // return the ID of the table row equivalent to the current time
      var currentParentID = $(this).parent().attr('id');

      // change the background of the row to red to mark the current time (red row)
      $('#'+currentParentID).children().eq(1).removeClass('past').addClass('present');
    
      // calculate how many hours slot are after the current one (red row)
      var numberOfSiblingsFollowingRed = $('#'+currentParentID).nextAll().length;  
      
      // loop through all siblings following the red row
      for (i=0 ; i<numberOfSiblingsFollowingRed ; i++) {
        // target each sibling second child and change the background to green
        $('#'+currentParentID).nextAll().eq(i).children().eq(1).removeClass('past').addClass('future');
      };
    };
});


// Get data saved in local storage and populate the fields
for (var i=1 ; i<=9 ; i++) {
  var savedValue = localStorage.getItem(`dataKey${i}`);
  // write data from local storage inside the text field 
  var inputID = `#input${i}`;
  $(inputID).val(savedValue);
};
// Add an event listener to detect if the user has changed the text
$(inputID).on('input', function() {
  // Update the local storage with the new value of text field
  localStorage.setItem(`dataKey${i}1`, $(this).val());
});



// Function to save the text introduced in the text field to local storage (called from html block)
function submitForm(i) {
    // Code to handle the input field value
  var inputID = `#input${i}`;
  console.log(inputID);
  var inputValue =  $(inputID).val();
  // Save data to local storage
  localStorage.setItem(`dataKey${i}`, inputValue);
};



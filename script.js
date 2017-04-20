/*global variables to keep track of the number of numbers and strings entered as well as the sum and the concatenated string*/
var numCount = 0;
var numSum = 0;
var strConcat = "";
var numString = 0;

/*event handlers for the submit and reset buttons*/
$('#submit-button').on('click', processSubmit);
$("#reset-button").on("click", processReset);

/*function for when submit is clicked*/  
function processSubmit() {
  /*gets the value the user entered into the textarea*/
  var inputVal = $("#text-input").val();
  var average;
  var statsDisplay;
  /*check if the input is numeric*/
  if ($.isNumeric(inputVal)) {
    /*clear the stats for numbers*/
    $("#num-display").html("");
    /*increment the count for the number of numbers entered so far*/
    numCount = numCount + 1;
    /*add the number to the total sum*/
    numSum = numSum + parseFloat(inputVal);
    /*find the average of the numbers entered so far*/
    average = (numSum / numCount);
    /* add these new values to the dom*/
    statsDisplay = $("#num-display");
    statsDisplay.append($("<p>").text("Total numbers entered: " + numCount));
    statsDisplay.append($("<p>").text("Sum of numbers: " + numSum));
    statsDisplay.append($("<p>").text("Average of numbers: " + average));  
  } else {
    /*if not a number then assume it is a string*/
    /*do not allow empty strings as inputs*/
    if(inputVal != "") {
      /*clear the stats for strings*/
      $("#str-display").html("");
      /*increment the number of strings*/
      numString = numString + 1;
      /*add the new string to the current string*/
      strConcat = strConcat + inputVal;
      statsDisplay = $("#str-display");
      statsDisplay.append($("<p>").text("Total strings entered: " + numString));
      statsDisplay.append($("<p>").text("Current string: " + strConcat));
    }
  }
  /*clear the textbox*/
  $("#text-input").val("");
  
  event.preventDefault();
}

function processReset() {
  /*reset globals to zero*/
  numCount = 0;
  numSum = 0;
  strConcat = "";
  numString = 0;
  /*reset string and number stats to zero*/
  $("#num-display").html("");
  $("#str-display").html("");
}
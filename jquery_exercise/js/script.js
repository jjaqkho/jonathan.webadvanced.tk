// MY HOMEWORK METHOD

// $("#pirate").hide();
// $("body").addClass("gradient");
//
// var clicked = false;
//
// $("button").click(function() {
//
//   if (clicked == false) {
//     $("#status").html($("#status").html() == 'GO' ? 'STOP' : 'GO');
//     $("#toggle").html($("#toggle").html() == 'Stop' ? 'Start' : 'Stop');
//     $("#status").toggleClass("greenbackground");
//   } else {
//
//   }
//
// });
//
//
//
// $("#status").mouseenter(function() {
//   $("#cat").css("display", "block");
// });
// Hint: you will want to store the current state of the button in a variable. HOW THO??????????????



$("#pirate").hide();

var clicked = false;


$("#toggle").click(function() {

  if (clicked == false) {
    $("#status").html("GO");
    $("#status").css("background-color", "lime");
    $(this).html("Stop"); // $(this) goes back to the original element > toggle
    clicked = true; // << new variable when clicked so next click the variable will not be "false"
    console.log("you made it");
  } else {
    $("#status").html("STOP");
    $("#status").css("background-color", "red");
    $(this).html("Start");
    clicked = false; // << new variable when clicked so next click the variable will not be "false"
    console.log("you made it again");
  }
});

$("#status").mouseenter(function() {
  if (clicked == true) { // << importing the condition instead of copying the whole "if green is true statement"
    $("#cat").show();
  }
});
$("#status").mouseleave(function() {
  $("#cat").hide();
});


// SECOND OPTION
$("#status").hover(function() {
  if (clicked == true) {
    $("#cat").show();
  }
}, function() { //otherwise
  $("#cat").hide();
});

console.log("hello world");


// Math.floor() rounding closest up or down
// Math.round() rounding up when 5
// Math.ceil() rounding up after.1


// var counter = 0;

// runs many times
// setInterval(function() {
//     console.log("hey" + counter);
//     counter++;
// }, 50);
var timer = 0;
var counter = 0;
var numbers = [];

for (var x=0;x<100;x++) {
    numbers.push(x);
}

console.log(numbers);


// var snow = "";
// for (var s=0; s<40; s++) {
//     if (Math.random()*100<70) {
//         snow += "*";
//     } else {
//         snow += " ";
//     }
// }


for (var i=0; i<100; i++) {
    setTimeout(function() {
var snow = "";
for (var s=0; s<40; s++) {
    if (Math.random()*100<30) {
        snow += "火";
    } else if (Math.random()*100<50) {
        snow += "炎";
    } else if (Math.random()*100<70) {
        snow += "焱";
    }
}
console.log(snow);
    }, timer);
    timer += 40;
    counter++;
}



// countdown then execute
// setTimeout(function() {
//     console.log("hey");
// }, (Math.random()*5000));













// var user = "brendan";
// var password = "letmein";
// var i = 0;

// var lastnum = false;

// // for (var i=0; i<10; i++) {
// //     console.log(i*2);
// // }

// for (i=0; i<1000; i++) {
//      var newnum = (Math.floor(Math.random()*10));
//      while (lastnum == newnum) {
//          newnum = (Math.floor(Math.random()*10));
//      }
//      console.log(newnum);
//      lastnum = newnum;
// }







// always true and never false so it keeps looping
// while (i<10) {
//     console.log(Math.floor(Math.random()*10));
//     i++;
// }










// if (user == "brendan" && password == "letmein") {
//     console.log("you made it...");
// } else {
//     if (user == "Brendan") {
//         console.log("Sorry, wrong password");
//     } else {
//         console.log("Sorry, wrong username");
//     }
// }





// if (user == "brendan" && password == "letmein") {
//     console.log("you made it...");
// } else if (user == "Brendan") {
//         console.log("Sorry, wrong password");
//     } else if (user != "Brendan" && password != "letmein"){
//         console.log("Sorry, wrong username and password");
//     } else {
//         console.log("Wrong username");
// }






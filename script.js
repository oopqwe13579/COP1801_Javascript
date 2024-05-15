// External JavaScript File: script.js

// Function to run the script when the window loads
window.onload = function() {
    // Prompt the user for their first name and store it in the variable Fname
    var Fname = prompt("Please enter your first name:");

    // Create the constant piValue to store the value of Pi to 7 significant digits (3.1415926)
    const piValue = 3.1415926;

    // Prompt the user to input their favorite number and store the value in a variable myFavNum
    var myFavNum = prompt("Please enter your favorite number:");

    // Calculate the area of a circle using the user's favorite number as the radius (r)
    var myArea = piValue * myFavNum * myFavNum;

    // Display the contents of each variable to the webpage in a message
    document.body.innerHTML = `Hello ${Fname}, you entered ${myFavNum} as your favorite number. If that was the radius of a circle, the circle’s area would be ${myArea}.`;
};

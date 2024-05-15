// External JavaScript File: script.js

// Function to run the script when the window loads
window.onload = function() {
    // Task 1: For loop that counts from 0 to 10
    for (let count = 0; count <= 10; count++) {
        // Check if the current number is odd or even
        if (count % 2 === 0) {
            document.body.innerHTML += `Count ${count} is even<br>`;
        } else {
            document.body.innerHTML += `Count ${count} is odd<br>`;
        }
    }

    // Task 2: Ask the user for a number between 5 and 20, and store the input in the variable myNum
    let myNum;
    do {
        myNum = prompt("Please enter a number between 5 and 20:");
        myNum = parseInt(myNum, 10);
    } while (isNaN(myNum) || myNum < 5 || myNum > 20);

    // Task 3: Use the myNum variable in a Do While loop
    let counter = 1;
    do {
        document.body.innerHTML += `Loop counter is ${counter}<br>`;
        counter++;
    } while (counter <= myNum);

    // Task 4: Store subjects in an array
    const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

    // Task 5: Display array values in a readable format using forEach()
    subjects.forEach((subject) => {
        document.body.innerHTML += `${subject}<br>`;
    });

    // Task 6: Display array values separated by commas using one statement
    document.body.innerHTML += `Subjects: ${subjects.join(", ")}<br>`;
};

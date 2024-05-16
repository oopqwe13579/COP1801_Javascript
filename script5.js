// External JavaScript File: script.js

// Function to run the script when the window loads
window.onload = function() {
    // Object created using object literal (myDog) with all the properties
    const myDog = {
        name: "Astro",
        breed: "Great Dane",
        show: "The Jetsons",
        characterType: "cartoon",
        mySound: "When I bark, I am not scary.",
        displayInfo: function() {
            return `Hello, my name is ${this.name}. When I bark, I am not scary. I starred in the TV show ${this.show}. My character was a ${this.breed}. I was the family dog in a cartoon about a family in the future.`;
        }
    };

    // Display the contents of the object in a descriptive message to the browser
    document.body.innerHTML += `${myDog.displayInfo()}<br>`;

    // Another dog object created using a simple constructor
    function Dog(name, breed, show, characterType, mySound) {
        this.name = name;
        this.breed = breed;
        this.show = show;
        this.characterType = characterType;
        this.mySound = mySound;
        this.canTalk = true; // New property added
        this.myGreeting = function() {
            return `Hello, my name is ${this.name}. When I bark, I am not scary. I starred in the TV show ${this.show}. My character was a ${this.breed}. I was the family dog in a cartoon about a family in the future. Can I talk? ${this.canTalk}`;
        };
    }

    // Create a new dog object using the constructor
    const myDogConst = new Dog("Astro", "Great Dane", "The Jetsons", "cartoon", "When I bark, I am not scary.");

    // Display the contents of the constructor object in a descriptive message to the browser
    document.body.innerHTML += `${myDogConst.myGreeting()}<br>`;
};

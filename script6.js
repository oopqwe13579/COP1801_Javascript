// External JavaScript File: script6.js

// Function to run the script when the window loads
window.onload = function() {
    // Constructor function to create a dog object
    function Dog(name, breed, show, characterType, mySound, canTalk) {
        this.name = name;
        this.breed = breed;
        this.show = show;
        this.characterType = characterType;
        this.mySound = mySound;
        this.canTalk = canTalk;
        this.myGreeting = function() {
            const talkMessage = this.canTalk ? "I can talk!" : "I cannot talk.";
            return Hello, my name is ${this.name}. When I bark, I am not scary. I starred in the TV show ${this.show}. My character was a ${this.breed}. Can I talk? ${talkMessage};
        };
    }

    // Create two new dog objects
    const scoobyDoo = new Dog("Scooby-Doo", "Great Dane", "Scooby-Doo, Where Are You!", "cartoon", "Scooby-Doo, where are you!", true);
    const snoopy = new Dog("Snoopy", "Beagle", "Peanuts", "cartoon", "Good grief!", false);

    // Store the dog objects in an array
    const dogs = [scoobyDoo, snoopy];

    // Use a for...in loop to display each property and value for each dog
    let dogInfo = "";
    for (const dog of dogs) {
        for (const prop in dog) {
            if (typeof dog[prop] !== 'function') {
                dogInfo += ${prop}: ${dog[prop]}<br>;
            }
        }
        dogInfo += "<br>";
    }
    document.getElementById("dog-info").innerHTML = dogInfo;

    // Prompt the user to select a dog by typing in one of the dog's names
    const selectedDogName = prompt("Please type the name of the dog (Scooby-Doo or Snoopy):");

    // Find the selected dog and display its information
    const selectedDog = dogs.find(dog => dog.name === selectedDogName);
    if (selectedDog) {
        document.getElementById("selected-dog-info").innerHTML = selectedDog.myGreeting();
    } else {
        document.getElementById("selected-dog-info").innerHTML = "The dog you selected does not exist.";
    }
};

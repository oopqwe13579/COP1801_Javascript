// External JavaScript File: script6.js

// Function to run the script when the window loads
window.onload = function() {
    // Dog constructor function
    function Dog(name, breed, show, characterType, mySound, canTalk) {
        this.name = name;
        this.breed = breed;
        this.show = show;
        this.characterType = characterType;
        this.mySound = mySound;
        this.canTalk = canTalk;
        this.myGreeting = function() {
            return `Hello, my name is ${this.name}. When I bark, I am not scary. I starred in the TV show ${this.show}. My character was a ${this.breed}. I was the family dog in a cartoon about a family in the future. Can I talk? ${this.canTalk ? "I can talk!" : "I cannot talk."}`;
        };
    }

    // Create two new dog objects using the constructor function
    const scooby = new Dog("Scooby-Doo", "Great Dane", "Scooby-Doo, Where Are You!", "cartoon", "Scooby-Dooby-Doo!", true);
    const brian = new Dog("Brian", "Labrador Retriever", "Family Guy", "cartoon", "I can talk and drink martinis.", true);

    // Display each dog's properties using a for...in loop
    const dogs = [scooby, brian];
    dogs.forEach(dog => {
        for (let property in dog) {
            if (dog.hasOwnProperty(property) && typeof dog[property] !== 'function') {
                document.body.innerHTML += `${property}: ${dog[property]}<br>`;
            }
        }
        document.body.innerHTML += `<br>`;
    });

    // Prompt the user to select one of the dogs
    let selectedDogName = prompt("Please select a dog by typing its name: Scooby-Doo or Brian");
    let selectedDog = dogs.find(dog => dog.name.toLowerCase() === selectedDogName.toLowerCase());

    // Display information about the selected dog
    if (selectedDog) {
        document.body.innerHTML += `<p>${selectedDog.myGreeting()}</p>`;
    } else {
        document.body.innerHTML += `<p>The dog you selected doesn't exist.</p>`;
    }
};

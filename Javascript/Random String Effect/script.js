function generateRandomCharacter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
}

const phraseList = [
    "Random String Here",
    // "",
    
    // Add more phrases as needed
];

function getRandomPhrase() {
    return phraseList[Math.floor(Math.random() * phraseList.length)];
}

function transformStringToPhrase(element, randomString, phrase) {
    const phraseArray = phrase.split('');
    let currentString = randomString.split('');
    let currentIndex = 0;

    function transformCharacter() {
        if (currentIndex < phraseArray.length) {
            const currentChar = phraseArray[currentIndex];
            currentString[currentIndex] = currentChar;
            element.textContent = currentString.join('');
            currentIndex++;
        } else {
            // Convert remaining characters to white spaces
            for (let i = currentIndex; i < currentString.length; i++) {
                currentString[i] = ' ';
            }
            element.textContent = currentString.join('');
        }
    }

    // Transform a character every 100 milliseconds
    let interval = setInterval(transformCharacter, 100);

    // Stop transforming when all phrase characters are applied
    setTimeout(() => {
        clearInterval(interval);
    }, (phraseArray.length) * 100); // Stop after the phrase is completed
}

function updateRandomString(element, length) {
    let currentString = '';

    // Get a random phrase and set the length accordingly
    const randomPhrase = getRandomPhrase();
    length = randomPhrase.length;

    // Make the length of the random string match the length of the phrase
    while (currentString.length < length) {
        currentString += generateRandomCharacter();
    }

    element.textContent = currentString;

    function addRandomCharacter() {
        const randomChar = generateRandomCharacter();
        currentString = randomChar + currentString.slice(0, length - 1);
        element.textContent = currentString;
    }

    // Add a new character every 100 milliseconds
    let interval = setInterval(addRandomCharacter, 100);

    // Stop generating new characters after 5 seconds
    setTimeout(() => {
        clearInterval(interval);

        // Display the random phrase
        transformStringToPhrase(element, currentString, randomPhrase);

        // Start generating new characters after an additional 5 seconds (10 seconds in total)
        setTimeout(() => {
            updateRandomString(element, length);
        }, 5000);
    }, 5000);
}

// Display the initial random string
const randomStringElement = document.getElementById('randomString');
updateRandomString(randomStringElement, 31); // Set the length to 31 characters (will be updated based on the random phrase)

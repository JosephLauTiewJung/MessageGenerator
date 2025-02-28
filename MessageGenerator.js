/**
 * This program generates a motivational message by combining three phrases.
 */

const beginningPhrases = [
    "Believe in yourself",
    "You are capable",
    "Every day is a new opportunity",
    "Your potential is limitless",
    "Trust in your abilities"
];

const middlePhrases = [
    "to achieve great things",
    "to make a difference",
    "to learn and grow",
    "to overcome any obstacle",
    "to inspire others"
];

const endingPhrases = [
    "so go out and shine!",
    "so embrace the challenges!",
    "so keep pushing forward!",
    "so never give up!",
    "so make today amazing!"
];

function generateMessage() {
    const beginningIndex = Math.floor(Math.random() * beginningPhrases.length);
    const middleIndex = Math.floor(Math.random() * middlePhrases.length);
    const endingIndex = Math.floor(Math.random() * endingPhrases.length);

    return `${beginningPhrases[beginningIndex]} ${middlePhrases[middleIndex]} ${endingPhrases[endingIndex]}`;
}

for (let i = 0; i < 5; i++) {
    console.log(generateMessage());
}
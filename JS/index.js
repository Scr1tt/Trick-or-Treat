console.log ("Hello!")

function pickRandomCandy() {
    const candies = [
        'images/skittles.jpg',
        'images/milkyway.jpg',
        'images/nerds.jpg',
        'images/twix.jpg',
        'images/twizzlers.jpg',
    ];

    const randomIndex = Math.floor(Math.random() * candies.length);

    const candyType = document.getElementById('candyType');
    candyType.src = candies[randomIndex];
    candyType.style.display = 'block';
}

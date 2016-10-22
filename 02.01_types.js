// types of async

// 1. event

var alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', (event) => {
    alert('now I was clicked');
});

// same paradime for streams, networking
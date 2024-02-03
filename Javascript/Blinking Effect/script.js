const blinkingUnderscore = document.getElementById('blinking');

setInterval(() => {
    blinkingUnderscore.style.visibility = (blinkingUnderscore.style.visibility === 'hidden') ? 'visible' : 'hidden';
}, 500);

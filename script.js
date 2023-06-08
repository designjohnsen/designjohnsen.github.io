let i = 0;
let text = 'Fredrik Johnsen'; 
let speed = 100;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('typed-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else {
        blinkCursor();
    }
}

function blinkCursor() {
    let cursor = document.querySelector('.cursor');
    setInterval(() => {
        if(cursor.style.opacity === '0') {
            cursor.style.opacity = '1';
        } else {
            cursor.style.opacity = '0';
        }
    }, 500);
}

window.onload = typeWriter;

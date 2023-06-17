let i = 0;
let text = 'Fredrik Johns'; 
let typo = '3n';
let correct = 'en';
let speed = 70;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('typed-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else if (i == text.length){
        document.getElementById('typed-text').innerHTML += typo.charAt(0);
        i++;
        setTimeout(typeWriter, speed * 6);
    }
    else if (i == text.length + 1){
        document.getElementById('typed-text').innerHTML += typo.charAt(1);
        i++;
        setTimeout(eraseTypo, speed * 10);
    }
}

function eraseTypo() {
    if (document.getElementById('typed-text').innerHTML != text) {
        document.getElementById('typed-text').innerHTML = document.getElementById('typed-text').innerHTML.slice(0, -1);
        setTimeout(eraseTypo, speed * 7);
    }
    else {
        setTimeout(typeCorrect, speed);
    }
}

function typeCorrect() {
    if (document.getElementById('typed-text').innerHTML != (text + correct)) {
        document.getElementById('typed-text').innerHTML += correct.charAt(document.getElementById('typed-text').innerHTML.length - text.length);
        setTimeout(typeCorrect, speed);
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

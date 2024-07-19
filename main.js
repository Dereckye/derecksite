/*Typing Animation */
document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: [
            'I code cool <strong>responsive websites</strong>',
            'I develop scalable <strong>mobile apps</strong>',
            'I create amazing <strong>user experiences</strong>',
            'I keep my code <strong>dry</strong> and <strong>uncoupled</strong>'
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    };
    var typed = new Typed('.typed-subtitle', options);
});
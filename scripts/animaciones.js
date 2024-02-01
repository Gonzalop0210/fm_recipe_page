window.sr = ScrollReveal();
sr.reveal('.header', {
    duration: 3000,
    origin: 'left',
    distance: '-200px',
});

sr.reveal('.main', {
    duration: 3000,
    origin: 'rigth',
    distance: '-200px',
});

sr.reveal('.footer', {
    duration: 3000,
    origin: 'left',
    distance: '-200px',
    reset: true,
});
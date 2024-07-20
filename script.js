(function () {

    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelectorAll('.cursor');

    const animateit = function (e) {
        const span = this.querySelector('span');
        const {
            offsetX: x, offesetY: y
        } = e,
        {
            offsetWidth: width,
            offsetHeight: height
        } = this,

        move = 25,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;
    }
})
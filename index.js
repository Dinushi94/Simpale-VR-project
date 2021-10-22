$ = (queryString) => document.querySelector(queryString);

const shiftHue = (hue) => (hue + 1) % 360

let hue = 0;

const animate = () => {
    hue = shiftHue(hue);
    const color = `hsl(${hue}, 100%, 50%)`;
    $('a-sphere').setAttribute('color',color);

    const variation = Math.sin(Date.now() / 1000);
    const position = `0 ${1.5 + variation} -3`;
    $('a-sphere').setAttribute('position',position);

    $('a-plane').setAttribute('color',color);
    $('a-plane').setAttribute('rotation', `-90 ${90 +variation}`);
    requestAnimationFrame(animate);
};


requestAnimationFrame(animate);
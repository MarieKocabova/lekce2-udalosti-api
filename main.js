
//písmo po najetí myši ztuční
let odstavec = document.querySelector('.odstavec');
function odstavecOnMouseOver() {
    odstavec.classList.add('odstavec-bold');
}
function odstavecOnMouseOut() {
    odstavec.classList.remove('odstavec-bold');
}

//tlačítko toggle písmo červená/černá
function toggleRed() {
    odstavec.classList.toggle('odstavec-red');
}

//zvětšít písmo o 1px
function increaseFontSize1px() {
    //najdi font size
    style = window.getComputedStyle(odstavec).getPropertyValue('font-size');
    //převeď na float
    currentSize = parseFloat(style);
    //k font size přičti 1
    odstavec.style.fontSize = (currentSize + 1) + 'px';
};


// audio přehraj
function prehraj (elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
}

// audio zastav
function zastav (elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}
 
//audio ztiš úplně
function ztisUplne (elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0;
}

//audio volume 50%
function volumeHalf (elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0.5;
}

//audio volume max
function volumeMax (elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 1;
}

//audio pusť od začátku
function backToStart (elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.load();
    audioElement.play();
}


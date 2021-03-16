// tady je místo pro náš program

let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty');

nadpis.classList.remove('zluty');

let odstavec = document.querySelector('.odstavec');
function odstavecOnMouseOver() {
    odstavec.classList.add('odstavec-bold');
}
function odstavecOnMouseOut() {
    odstavec.classList.remove('odstavec-bold');
}

function toggleRed() {
    odstavec.classList.toggle('odstavec-red');
}

console.log(odstavec);
 
function increaseFontSize1px(udalost) {
    //udalost.target.
    console.log(udalost);
    
    //najdi font size
    //převeď na int
    //k font size přičti 1
    //currentFontSize++;
};



 //<button onclick="zvetsitPismo(‚.odstavec, 1);">větší po kliknutí</button>
 //parseInt(element.style.fontSize);

 // https://www.w3schools.com/jsref/obj_event.asp - události


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

//audio vrať na začátek
function backToStart (elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.load();
}


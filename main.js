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

 
 function biggerOnclick(udalost) {
     //udalost.target.
     console.log(udalost);
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


 //buttony: přehraj, pauzni, ztišit, hlasitost tak akorát, hlasitost na max, nastav na začátek
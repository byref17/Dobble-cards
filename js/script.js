//      __              
//     |__| ____  __ __ 
//     |  |/ __ \|  |  \
//     |  \  ___/|  |  /
// /\__|  |\___  >____/ 
// \______|    \/       

const cartes = document.querySelectorAll(".carte");
let carteRetourne = false;
let lockBoard = false;
let premiereCarte, secondeCarte;
let totalClick = 0
let score = 0


cartes.forEach((carte) => carte.addEventListener("click", turnedCarte))
function turnedCarte() {
    if (lockBoard) return;
    if (this === premiereCarte) return;

    this.classList.add('turned');

    if (!carteRetourne) {
        carteRetourne = true;
        premiereCarte = this;
        return;
    }
    secondeCarte = this;
    chekForMatch();

    totalClick = totalClick + 1;
    // console.log(totalClick, "compteur");

    // affichage totalClick
    document.querySelector("#compteurclicks span").innerHTML = totalClick;
    document.getElementById('retcarte').play();
}

function chekForMatch() {
    let isMatch = premiereCarte.dataset.framework === secondeCarte.dataset.framework
    isMatch ? disableCartes() : unturnedCarte();

    // console.log('ismatch', isMatch)
    if (isMatch === true) { score = score + 1 }

    // console.log('score', score)
    document.querySelector("#score span").innerHTML = score;

    if (isMatch === true) {
        document.getElementById('sonduocarte').play();
    }
    if (score === 12) {
        document.getElementById('win').play();

    }
    if (score === 12) {
        document.querySelector(".gagne").innerHTML = '<div id= ecrangagne> BRAVO ! VOUS AVEZ GAGNE ! <img src="images/parametre/carottes001.gif"/></div>'
        console.log('gagne');
    }

}

function disableCartes() {
    premiereCarte.removeEventListener("click", turnedCarte);
    secondeCarte.removeEventListener("click", turnedCarte);
    resetBord();
}
function unturnedCarte() {
    lockBoard = true;
    setTimeout(() => {
        premiereCarte.classList.remove("turned");
        secondeCarte.classList.remove("turned");
        resetBord();
    }, 400);
}

function resetBord() {
    [carteRetourne, lockBoard] = [false, false];
    [premiereCarte, secondeCarte] = [null, null];
}
(function shuffle() {
    cartes.forEach((carte) => {
        let melangePos = Math.floor(Math.random() * 24)
        carte.style.order = melangePos;
    });
    //  console.log("melange")
})();


// bouton start
const btnStart = document.getElementById("btn-start")

// console.log('start')
btnStart.addEventListener('click', function () {
    // console.log('clique start');
});

// // bouton levels

const btnLevel1 = document.getElementById("btn-level1").onclick =
    function () {
        location.href = "level1.html"
        console.log('cliqué')
    }

const btnLevel2 = document.getElementById("btn-level2").onclick =
    function () {
        location.href = "level2.html"
    }

const btnLevel3 = document.getElementById("btn-level3").onclick =
    function () {
        location.href = "level3.html"
    }

//bouton son
const btnSon = document.getElementById("btn-son")

btnSon.addEventListener('click', function () {

});

//bouton config
const btnConfig = document.getElementById("btn-config")
// console.log('config')
btnConfig.addEventListener('click', function () {
    // console.log('clique config');
});


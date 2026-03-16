// /* Variable globales */
// // Références vers les objets du DOM
// let stopwatch = document.getElementById("chrono");
// let startButton = document.getElementById("startButton");
// let pauseButton = document.getElementById("pauseButton");
// let stopButton = document.getElementById("stopButton");

// // Fonction auto-exécutable d'intialisation : permet de ne pas rendre globale les variables utilisées dans la fonction
// (function () {
// 	// Ajout des fonctions qui seront appelées suivant les évènement
// 	startButton.addEventListener("click", startChrono, false);

// })();

// // Démarre le chronomètre et masque les boutons inutiles
// function start() {

// }

// function pause() {
// }

// function stopChrono() {
// }

/* Variables globales */
// Références vers les objets du DOM
let stopwatch = document.getElementById("chrono");
let startButton = document.getElementById("startButton");
let pauseButton = document.getElementById("pauseButton");
let stopButton = document.getElementById("stopButton");

// Variables pour le chronomètre
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;

// Fonction auto-exécutable d'initialisation
(function () {
    startButton.addEventListener("click", start, false);
    pauseButton.addEventListener("click", pause, false);
    stopButton.addEventListener("click", stopChrono, false);

    // Au départ, seuls Start est actif
    pauseButton.disabled = true;
    stopButton.disabled = true;
})();

// Fonction pour démarrer le chronomètre
function start() {
    if (!timer) {
        timer = setInterval(updateChrono, 1000);
    }
    startButton.disabled = true;
    pauseButton.disabled = false;
    stopButton.disabled = false;
}

// Fonction pour mettre en pause ou reprendre
function pause() {
    if (timer) {
        // Pause
        clearInterval(timer);
        timer = null;
        pauseButton.value = "Reprendre";
    } else {
        // Reprendre
        timer = setInterval(updateChrono, 1000);
        pauseButton.value = "Pause";
    }
}

// Fonction pour arrêter et remettre à zéro
function stopChrono() {
    clearInterval(timer);
    timer = null;

    hours = 0;
    minutes = 0;
    seconds = 0;

    // Met à jour l'affichage
    document.getElementById("h").textContent = "00";
    document.getElementById("m").textContent = "00";
    document.getElementById("s").textContent = "00";

    startButton.disabled = false;
    pauseButton.disabled = true;
    pauseButton.value = "Pause";
    stopButton.disabled = true;
}

// Fonction interne pour incrémenter et afficher le chrono
function updateChrono() {
    seconds++;

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById("h").textContent = hours.toString().padStart(2, "0");
    document.getElementById("m").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("s").textContent = seconds.toString().padStart(2, "0");
}
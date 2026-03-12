// Récupérer le bouton
const button = document.querySelector("#button-choice");

// Ajouter l'évènement clic
button.addEventListener("click", afficherResultat);

function afficherResultat() {

    // récupérer la date choisie
    const dateValue = document.querySelector('input[name="dateInput"]').value;

    // transformer en objet Date
    const date = new Date(dateValue);

    // récupérer le choix radio sélectionné
    const choix = document.querySelector('input[name="radioChoice"]:checked').value;

    // champ texte résultat
    const resultat = document.querySelector("#text-choice");

    // tableaux pour afficher les noms
    const jours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    const mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];

    if (choix === "day") {

        resultat.value = jours[date.getDay()];

    } 
    else if (choix === "month") {

        resultat.value = mois[date.getMonth()];

    } 
    else if (choix === "remainingDay") {

        const finAnnee = new Date(date.getFullYear(), 11, 31);

        const diff = finAnnee - date;

        const joursRestants = Math.ceil(diff / (1000 * 60 * 60 * 24));

        resultat.value = joursRestants;
    }
}


console.log("Bienvenue dans le TP JavaScript !");

console.error("Exemple de message d'erreur");

alert("La page JavaScript est prête.");

console.log("Eya Saidi - Groupe 2");

let nom = "Eya Saidi";
let age = 19;
let ville = "Mahdia";

const institut = "ISET Mahdia";

console.log(nom);
console.log(age);
console.log(ville);
console.log(institut);

console.log(typeof nom);
console.log(typeof age);
console.log(typeof institut);

let prenom;

console.log(prenom);
console.log(typeof prenom);




let prix = "12";
let quantite = "3";

console.log(prix + quantite);

console.log(Number(prix) + Number(quantite));

let prixUnitaire = 12;
let quantiteNombre = 3;

let total = prixUnitaire * quantiteNombre;

console.log(prixUnitaire + quantiteNombre);
console.log(prixUnitaire - quantiteNombre);
console.log(prixUnitaire * quantiteNombre);
console.log(prixUnitaire / quantiteNombre);
console.log(prixUnitaire % quantiteNombre);

console.log(total);

console.log(total >= 30);
console.log(total === 36);
console.log(total !== 36);

let inscrit = true;
let ageEtudiant = 19;

console.log(inscrit && ageEtudiant >= 18);
console.log(inscrit || ageEtudiant < 18);
console.log(!inscrit);





let note = 15;

if (note < 0 || note > 20) {
    console.log("Note invalide");
}
else if (note < 10) {
    console.log("Non admis");
}
else if (note <= 13) {
    console.log("Assez bien");
}
else if (note <= 16) {
    console.log("Bien");
}
else {
    console.log("Très bien");
}

let notes = [8, 12, 15, 18, -2, 22];

for (let i = 0; i < notes.length; i++) {

    let note = notes[i];

    if (note < 0 || note > 20) {
        console.log(note + " : Note invalide");
    }
    else if (note < 10) {
        console.log(note + " : Non admis");
    }
    else if (note <= 13) {
        console.log(note + " : Assez bien");
    }
    else if (note <= 16) {
        console.log(note + " : Bien");
    }
    else {
        console.log(note + " : Très bien");
    }
}

let nombre = 10;
let texte = "10";

console.log(nombre == texte);
console.log(nombre === texte);




for (let i = 1; i <= 10; i++) {
    console.log(i);
}


for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}



let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}



for (let i = 1; i <= 5; i++) {
    console.log("Étudiant numéro " + i);
}




function calculerTotal(prix, quantite) {
    return prix * quantite;
}

let resultat = calculerTotal(12, 3);

console.log(resultat);




function verifierAdmission(note) {

    if (note >= 10) {
        return true;
    }
    else {
        return false;
    }
}

console.log(verifierAdmission(15));
console.log(verifierAdmission(8));
console.log(verifierAdmission(10));




function saluer(nom) {
    return "Bonjour " + nom;
}

console.log(saluer("Eya"));
console.log(saluer("Ahmed"));




const titre = document.getElementById("titre");

const message = document.getElementById("message");

const champNom = document.getElementById("nom");

const btnAfficher = document.getElementById("btnAfficher");

const btnTitre = document.getElementById("btnTitre");




btnAfficher.addEventListener("click", function() {

    if (champNom.value === "") {
        message.textContent = "Veuillez saisir votre nom";
    }
    else {
        message.textContent = "Bonjour " + champNom.value;
    }

});




btnTitre.addEventListener("click", function() {

    titre.textContent = "Bienvenue dans mon profil !";

});




titre.style.color = "blue";



titre.classList.add("important");

titre.classList.remove("important");

titre.classList.toggle("important");



message.innerHTML = "Bienvenue ! <strong>Profil étudiant</strong>";



const apercu = document.querySelector("#apercu");

champNom.addEventListener("input", function () {

    if (champNom.value === "") {
        apercu.textContent = "En attente de saisie";
    }
    else {
        apercu.textContent = "Vous saisissez : " + champNom.value;
    }

});

champNom.addEventListener("change", function () {

    console.log("La saisie est terminée : " + champNom.value);

});



const texteApercu = document.querySelector("#texteApercu");

const gras = document.querySelector("#gras");

const italique = document.querySelector("#italique");




gras.addEventListener("change", function () {

    if (gras.checked) {
        texteApercu.style.fontWeight = "bold";
    }
    else {
        texteApercu.style.fontWeight = "normal";
    }

});




italique.addEventListener("change", function () {

    if (italique.checked) {
        texteApercu.style.fontStyle = "italic";
    }
    else {
        texteApercu.style.fontStyle = "normal";
    }

});




const couleurs = document.querySelectorAll('input[name="couleur"]');

couleurs.forEach(function (radio) {

    radio.addEventListener("change", function () {

        const couleurSelectionnee =
            document.querySelector('input[name="couleur"]:checked');

        if (couleurSelectionnee !== null) {

            texteApercu.style.color = couleurSelectionnee.value;

        }

    });

});



const domaine = document.querySelector("#domaine");

const resultatDomaine = document.querySelector("#resultatDomaine");

domaine.addEventListener("change", function () {

    if (domaine.value === "") {

        alert("Veuillez choisir un domaine.");

        resultatDomaine.textContent = "";

    }
    else {

        alert("Domaine choisi : " + domaine.value);

        resultatDomaine.textContent =
            "Votre domaine choisi est : " + domaine.value;

    }

});
"use strict";

// Compteur de lignes insérées initialise à 0
let lignes = 0;
 // compteur de points
let total_points = 0;


// Tableau d'objets "persons" (slides 38-40)
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Appel de init()
init();

// init() parcourt le tableau persons et appelle doInsert pour chaque objet
function init() {
    // Boucle for...of (slide 44)
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}

// doInsert incrémente le compteur "lignes" et l'utilise comme numéro
function doInsert(nom, prenom, points) {
    lignes++;// Incrémente le compteur de lignes (page 41)
    total_points += points;
    doInsertRowTable(lignes, nom, prenom, points);
    updateSummary();
}

function updateSummary() {
    const p1 = document.getElementById("p1");
    const p3 = document.getElementById("p3");
    p1.innerText = `${lignes} ligne(s)`;
    p3.innerText = `Total de point(s) = ${total_points}`;}

// Affiche le contenu du tableau "persons" dans la console
function consoleTableau() {
    console.log(persons);
}

// Fonction de l'étape 2 (inchangée)
function doInsertRowTable(num, nom, prenom, points) {

    const table = document.getElementById("table_persons");

    const row = document.createElement("tr");

    // Affecter la classe "row" avec setAttribute (slides 106-107)
    row.setAttribute("class", "row");

    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);

      // Affecter les classes de chaque colonne (setAttribute, slides 106-107)
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    row.append(col1, col2, col3, col4, col5);
    table.append(row);
}
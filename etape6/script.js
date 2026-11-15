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

// doNewData : lit les champs du formulaire, vérifie la saisie, puis ajoute la personne
function doNewData() {

    // Récupérer les 3 champs de saisie par leur id (slides 61-63)
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // Lire l'attribut value de chaque champ
    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    const points = parseInt(elt_points.value);

    // Saisie contrôlée : if else avec lopérateur || (slides 41-42)
    // Number.isNaN(points) vaut true si le champ points est vide
    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        // alert méthode de window (slides 112-116)
        alert("Formulaire incomplet !");
    } else {
        // Insérer la ligne dans le tableau HTML (appel de doInsert, slide 45)
        doInsert(nom, prenom, points);

        // Insérer aussi la personne dans le tableau d'objets "persons" (slides 38-40)
        persons.push({ nom: nom, prenom: prenom, points: points });

        // Vider les champs pour préparer une autre saisie
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}

function deleteRow() {
    
    if(lignes == 0){
        alert("Aucune ligne à supprimer !");// alert (slides 112-116)
        return;
    }
    // querySelector et querySelectorAll (slides 76-77)
    const table = document.querySelector("#table_persons");
    const cochees = table.querySelectorAll(".col_chkbox input:checked");
    
    if (cochees.length === 0) {
        alert("Sélectionnez au moins une ligne !");
        return;
    }

    //confirmation avant suppression (slide 116 genre de popup)
    if (!confirm("Voulez-vous vraiment supprimer " + cochees.length + " lignes ?")) {
        return;
    }
    //récupérer toutes les lignes du tableau (slides 79-82)
    const rows = table.querySelectorAll(".row");

    //parcourir les lignes de la dernière à la premiere pour eviter le decalage des index
    //boucle for (slide 44)
    for (let i = rows.length - 1; i >= 0; i--) {
        const checkbox = rows[i].querySelector(".col_chkbox input");

        if (checkbox.checked) {
            //points = contenu de la 4e cellule (children, slide 88)
            const points = parseInt(rows[i].children[3].innerText);

            total_points -= points;// soustraire du total (slide 41)
            lignes--;// décrémenter le compteur (slide 41)
            rows[i].remove();// supprimer la ligne du DOM (slide 100)
            persons.splice(i, 1);// supprimer l'entrée dans "persons"
        }
    }

    // Renuméroter les lignes restantes : 1, 2, 3... (slide 44)
    for (let i = 0; i < table.querySelectorAll(".row").length; i++) {
    table.querySelectorAll(".row")[i].children[0].innerText = i + 1;
}


    alert("Suppression effectuée avec succès !");
    updateSummary();
}


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
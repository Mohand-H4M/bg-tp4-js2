"use strict";

function doInsertRowTable(num, nom, prenom, points) {

    // Récupérer l'élément tableau (getElementById, slides 61-63)
    const table = document.getElementById("table_persons");

    // Créer un élément tr (ligne de tableau)
    const row = document.createElement("tr");

    // Affecter la classe "row" avec setAttribute (slides 106-107)
    row.setAttribute("class", "row");

    // Créer 5 éléments td (colonnes)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Remplir le contenu avec innerText (slides 90-91)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // La dernière colonne contient un input de type checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);

    // Affecter les classes de chaque colonne (setAttribute, slides 106-107)
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Ajouter les colonnes à la ligne avec append() (slides 97-98)
    row.append(col1, col2, col3, col4, col5);

    // Ajouter la ligne au tableau
    table.append(row);

    //quand je raffrechi la page les ligne que jai ajouter ont disparu car je nai pas sauvgarder les modification
}
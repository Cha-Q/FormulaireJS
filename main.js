let listElem = [
    [],
    [],
    []
];
let button = document.querySelector("button");

function ajouter() {
    let nom = document.getElementById("name").value;
    let prenom = document.getElementById("firstName").value;
    let log = document.getElementById("login").value;
    let mdp = document.getElementById("mdp").value;

    if (nom != "" && prenom != "" && log != "" && mdp != "") {

        listElem[0].push(nom);
        listElem[1].push(prenom);
        listElem[2].push(log);
        console.log(listElem);
        document.getElementById("nbrCompte").style.display = "none";
        document.getElementById("resultat").innerHTML += `<p class="display"><span class="inner">Nom :</span> ${nom}  <span class="inner">Prenom :</span> ${prenom}  <span class="inner">Login :</span> ${log} <img id="delete"src="./images/delete.png" alt="suppr" onclick="suppr();"> <img id="edit"src="./images/edit.png" alt="modif"></p>`;

    } else {
        document.getElementById("error").innerHTML = `Un des champs n'a pas été rempli correctement !`
    }

    document.querySelector("form").reset();
}

// function suppr() {
//     let display = document.getElementsByClassName("display");
//     result.removeChild(display);
// }
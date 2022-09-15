let formulaire = document.getElementById(formulaire)

formulaire.addEventListener('submit', function(e) {
    let inputname = document.getElementById(nom)

    if (inputname.value.trim() = "") {
        e.preventDefault();
    }
})

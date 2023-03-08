const afficheCalcul = document.getElementById('calcule');
const btn = [...document.querySelectorAll("button")];

console.log(btn);

btn.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case'C':
                afficheCalcul.innerText = "";
                break;
            case'DEL':
                afficheCalcul.innerText = afficheCalcul.innerText.slice(0,-1);
                break;
            case'=':
            try {
                afficheCalcul.innerText = eval(afficheCalcul.innerText.replace("/[^-+/*\d]/g,"))
                break;
            } catch {
                afficheCalcul.innerText = "Erreur";
            }
            default:
                afficheCalcul.innerText += e.target.innerText
                break;
            }
            console.log(button);
    })
})





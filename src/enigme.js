
const descH1 = document.querySelector(".super-desc-h1");
descH1.addEventListener("mouseover", () => {
    gsap.to(".super-desc > .super-desc-h1", {
        yoyo: true,
        keyframes: [{scale: 1.1 },{scale:1 }]
    });
});

const respons = {
    enigmeOne : "SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS",
    enigmeTwo : "OTHER RESPONSE"
}


function FirstRespond(){
    let inputValue = document.getElementById("respond").value;
    if(inputValue === respons.enigmeOne){
        let parentOutput = document.getElementById("outputFirst");
        let childOutput = document.getElementById("customFirst");

        parentOutput.style.visibility = "visible";
        childOutput.style.visibility = "visible"

        let heading2 = document.createElement("h2");
        heading2.textContent = "BRAVO!";
        heading2.className = "firstPopUpH2";
        childOutput.appendChild(heading2);

        let firstText = document.createElement("p");
        firstText.textContent = "Tu as trouvé la reponse. Es tu pret pour l'énigme suivante ?";
        firstText.className = "firstPopUpText";
        childOutput.appendChild(firstText);

        let firstBouton = document.createElement("button");
        firstBouton.className = "firstPopUpBouton";
        firstBouton.textContent = "QUESTION SUIVANTE";
        function resetFirstParent(){
            parentOutput.remove();
            childOutput.remove();
            
            let headingTwo = document.querySelector(".headingTwo");
            headingTwo.textContent = "ENIGME NUMERO 2";

            let paraTwo = document.querySelector(".paraTwo");
            paraTwo.textContent = "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :";

        }
        firstBouton.addEventListener("click", resetFirstParent);
        childOutput.appendChild(firstBouton);

        console.log(respons.enigmeOne);
    }else if(inputValue === ""){
        swal(
            {
                title: "Oh la la?",
                text: "On ne peut pas entrer une réponse vide!",
                icon: "warning",
                buttons: "Retourner",
                dangerMode: true,
            }
        );
    }else{
        swal(
            {
                title: "Pooff?",
                text: "Essayer de trouver la bonne réponse, tu peux le faire!",
                icon: "warning",
                buttons: "Ressayer",
                dangerMode: true,
            }
        );
    }
}

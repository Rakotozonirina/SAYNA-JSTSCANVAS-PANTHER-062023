
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
        console.log(respons.enigmeOne);
    }else if(inputValue === ""){
        swal(respons.enigmeTwo);
    }else{
        swal("wrong response");
    }
}

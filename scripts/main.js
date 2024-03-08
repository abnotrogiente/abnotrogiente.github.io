//localStorage.clear(); // A supprimer à la fin

function imgListener(event) {
    let imgg = event.target;
    let src = imgg.getAttribute("src");
    if (src === "images/icone.png") {
        imgg.setAttribute("src", "images/youtube.png");
        imgg.setAttribute("height", "200");
        imgg.setAttribute("width", "auto");
    } else {
        imgg.setAttribute("src", "images/icone.png");
        imgg.setAttribute("width", "200");
        imgg.setAttribute("height", "auto");

    }
}

function setNameInDoc(name) {
    let custom_name = document.querySelectorAll(".custom_name");
    for (const elem of custom_name) {
        elem.innerHTML = name;
    }
}
function changeName(event) {
    let name = prompt("Entrez votre nom :");
    localStorage.setItem("userName", name);

    setNameInDoc(name);
}

function buttonP2EventListener() {
    div = document.querySelector(".p2");
    if (div.style.display !== "block") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
    div.scrollIntoView();
}


let myHeading = document.querySelector("h1");
myHeading.textContent = "Hellow, world !";

let img = document.querySelector("img");
img.addEventListener("click", imgListener);

let buttonP2 = document.getElementById("bouton_p2");
buttonP2.addEventListener("click", buttonP2EventListener);

let buttonName = document.getElementById("button_name");
buttonName.addEventListener("click", function(){changeName();});

if (!localStorage.getItem("userName")) {
    changeName();
} else {
    setNameInDoc(localStorage.getItem("userName"));
}
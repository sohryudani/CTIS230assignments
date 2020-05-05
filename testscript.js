//Gets the ul with id firsttest from n64Games.html and declares it as myitem for use in JS
myitem = document.getElementById("firsttest");
thebutton = document.getElementById("thebutton");  
thebutton2 = document.getElementById("thebutton2");
thebutton3 = document.getElementById("thebutton3");
otheritem = document.getElementById("fluteofages");
otheritem2 = document.getElementById("silvereye");
otheritem3 = document.getElementById("diddykong");
textentry = document.getElementById("myinput");  

//Adds an event listener for myitem that runs the function onClick() whenever the object is clicked by the user
myitem.addEventListener("click", onClick);
myitem.addEventListener("mouseout", onMouseOut);
thebutton.addEventListener("click", onButtonClick);
thebutton2.addEventListener("click", onButtonClick2);
thebutton3.addEventListener("click", onButtonClick3);
textentry.addEventListener("change", onChange);

//Is run whenever myitem is clicked
function onClick() {  
    //Changes the color for myitem to green within the style sheet 
    myitem.style.color = "green";  
    myitem.style.fontSize = "1.5em";
}

function onMouseOut() {
    myitem.style.color = "";
    myitem.style.fontSize = "";
}

function onButtonClick() {
    otheritem.style.backgroundColor = "red";  
    otheritem.style.width = "fit-content";
}

function onButtonClick2() {
    otheritem2.style.backgroundColor = "darkslateblue";
    otheritem2.style.width = "fit-content";
}

function onButtonClick3() {
    otheritem3.innerHTML = "<strong>Diddy Kong 65</strong>"
    otheritem2.style.backgroundColor = "";
    otheritem.style.backgroundColor = "";
}

function onChange() {  
    newtext = myinput.value;  
    //keeps the same formatting
    newtext = "<strong>" + newtext + "</strong>";
    otheritem3.innerHTML = newtext;  
}
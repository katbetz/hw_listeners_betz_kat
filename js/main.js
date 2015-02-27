// makes the first h1 a variable
var clicktwice = document.getElementsByTagName("h1")[0];

// makes the first p a variable
var hoverz = document.getElementsByTagName("p")[0];

// makes the first li a variable
var clicker = document.getElementsByTagName("li")[0];

// makes the element with an id of colored a variable
var colorchange = document.getElementById("colored");

// makes i a variable
var i=0;

// listens for the first h1 to be double clicked then changes the color of the font   
clicktwice.addEventListener("dblclick", function(event){
    clicktwice.style.color = "midnightblue";
});

// listens for the first paragraph to be moused over then changes the font size
hoverz.addEventListener("mouseover", function(event){
    hoverz.style.fontSize = "1.2em";
});

// listens for the first paragraph to be moused out of then changes the font size back to the orignial size
hoverz.addEventListener("mouseout", function(event){
    hoverz.style.fontSize = "1em";
});

// listens for the first li to be clicked and then adds an li under it with text with each click
clicker.addEventListener("click", function(){
    var counter = document.createElement("li");
    var text = document.createTextNode("Oops! You clicked it again!");
    counter.appendChild(text);

    var list = document.getElementsByTagName("ul")[0];
    list.appendChild(counter);
});

// listens for the button to be clicked. depending on the number of clicks it changes the default color of the body.
colorchange.addEventListener("click", function(){
    var bod = document.getElementsByTagName("body")[0];
    i++;
    if(i <= 7){
    bod.style.color = "midnightblue";
    }
    else if(i > 7 && i < 13){
    bod.style.color = "green";
    }
    else if(i > 13){
    bod.style.color = "tomato";
    }
    console.log(i);
});

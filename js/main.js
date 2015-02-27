var clicker = document.getElementsByTagName("h1")[0];
var i = 0;

clicker.addEventListener("click", function(){
    i++;
    console.log(i);
    var counter = document.createElement("p");
    var text = document.createTextNode("This is click number " + i);
    counter.appendChild(text);

    var bod = document.getElementsByTagName("body")[0];
    bod.appendChild(counter);
});
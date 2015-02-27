var clicker = document.getElementById("submit");


clicker.addEventListener("click", function(event){
    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById("lastname").value;
    var emailinput = document.getElementById("email").value;
    var message = document.getElementById("comments").value;
    
    event.preventDefault();
    console.log("The First Name is: " + fname);
    console.log("The Last Name is: " + lname);
    console.log("The Email is: " + emailinput);
    console.log("The Message is: " + message);

});
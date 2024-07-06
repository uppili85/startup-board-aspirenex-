function showfandi() {
    let unameValue = document.getElementById("uname").value;
    let passValue = document.getElementById("password").value;
    let cnameValue = document.getElementById("cname").value;
    let emailValue = document.getElementById("email").value;
    let roleValue = document.getElementById("role").value;

    // Save data to localStorage
    localStorage.setItem("uname", unameValue);
    localStorage.setItem("pass", passValue);
    localStorage.setItem("cname", cnameValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("role", roleValue);


    // Clear input fields
    document.getElementById("uname").value = "";
    document.getElementById("password").value = "";
    document.getElementById("cname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("role").value = "";

   
}

function savedata() {
    let unameValue = document.getElementById("uname").value;
    let passValue = document.getElementById("password").value;
    let cnameValue = document.getElementById("cname").value;
    let emailValue = document.getElementById("email").value;
    let roleValue = document.getElementById("role").value;

    localStorage.setItem("uname", unameValue);
    localStorage.setItem("pass", passValue);
    localStorage.setItem("cname", cnameValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("role", roleValue);
}

function showtask() {
    let unameStored = localStorage.getItem("uname");
    let passStored = localStorage.getItem("pass");
    let cnameStored = localStorage.getItem("cname");
    let emailStored = localStorage.getItem("email");
    let roleStored = localStorage.getItem("role");

    //document.getElementById("uname").innerHTML = unameStored;
    
}

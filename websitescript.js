function AddCart(){
    alert("Your Order has been placed!")
}
function FormValidation(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(name===""){
        alert("There is an empty field")
        document.getElementById("name").value.focus();
        return false;
    }
    if(name.length>20){
        alert("The Name field cannot be more than 20 characters long")
        document.getElementById("name").value.focus();
        return false;
    }
    if(email===""){
        alert("There is an empty field")
        document.getElementById("email").value.focus();
        return false;
    }
    if(password===""){
        alert("There is an empty field")
        document.getElementById("password").value.focus();
        return false;
    }
    if(document.membershipform.country.value==="0"){
        alert("Please select a country")
        return false;
    }
    alert("Thank you for joining us"+" "+name)
    return false;

}



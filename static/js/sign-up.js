function register(event){
    event.preventDefault();

    let Fname = document.forms["RegForm"]["first_name"].value;
    let Lname = document.forms["RegForm"]["last_name"].value;
    let username =document.forms["RegForm"]["user_name"].value;
    var regname= /^[a-zA-Z\-\u05D0-\u05EA'\s]+$/i;
    if(!regname.test(username.value)){
        alert("only digits and no spaces");
        return false;
    }
    if (Fname.length < 2) {
        alert("First Name must be more than one letters");
        return false;
    }
    if (Lname.length < 2) {
        alert("Last Name must be more than one letters");
        return false;
    }
    const date = document.getElementById("birthday").value;
    const varDate = new Date(date);
    const today = new Date();
    if(!date || varDate >= today) {
        alert("The birthday cant be empty!");
        return false;
    }
    let pass = document.forms["RegForm"]["pass"].value;
    let repass = document.forms["RegForm"]["repass"].value;
    if( pass != repass){
        alert("Password did not matched");
        return false;
    }
    if(pass?.length<8){
        alert("Password must be at least 8 digits");
        return false;
    }
    var email=document.forms["RegForm"]["email"].value;
    if(email?.length==0){
        alert("must fill email address");
        return false;
    }
    if(email.indexOf('@')==-1){
        alert("please insert '@' to your email address");
        return false;
    }

    try {
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fullname: `${Fname} ${Lname}`,
                birthdate: date,
                password: pass,
                username,
                email
            }),
        })
            .then((res) => {
                if (res.error) {
                    alert(res.error);
                }else {
                    window.location = 'index.html';
                }
            })
            .catch((e) => {
                console.log(e);
                alert(e);
            });
    }
    catch(e) {
        console.log(e);
        alert(e.message);
    }
}
function login(event) {
    event.preventDefault();
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if(!username.value){
        username.style.border = "1px solid red";
        username.focus();
        return false;
    }
    else if(!password.value){
        password.style.border = "1px solid red";
        password.focus();
        return false;
    }

    try {
        fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            }),
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.error) {
                    alert(res.error);
                }
                else if (res.response) {
                    sessionStorage.setItem('USER', JSON.stringify(res.response));
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
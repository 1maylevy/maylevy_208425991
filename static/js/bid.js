const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

function create(event) {
    event.preventDefault();

    if (!sessionStorage.getItem('USER')) {
        alert("Please login first");
        return false;
    }

    let name = document.forms["bidForm"]["name"].value;
    if (name.length <= 1) {
        alert("Name must be more than one letters");
        return false;
    }
    let phone= document.forms["bidForm"]["phone"].value;
    if(phone.length<10){
        alert("Phone number must be at least 10 digits");
        return false;
    }
    
    const date = document.getElementById("date").value;
    const varDate = new Date(date);
    const today = new Date();
    if(!date || varDate <= today) {
        alert("The date cant be!");
        return false;
    }

    let numGuests= document.forms["bidForm"]["numGuests"].value;
    if(numGuests<100){
        alert("Sorry, we don't do events for less than 100 guests");
        return false;
    }

    let department= document.forms["bidForm"]["department"].value;
    if(!department){
        alert("Please choose what are you celebrating");
        return false;
    }

    let food= document.forms["bidForm"]["food"].value;
    if(!food){
        alert("Please choose a food service");
        return false;
    }

    let decorate= document.forms["bidForm"]["decorate"].value;
    if(!decorate){
        alert("Please choose if to decorate the place");
        return false;
    }

    try {
        const user = JSON.parse(sessionStorage.getItem('USER'));
        fetch("/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                placeId: params.id,
                userId: user.id,
                name,
                phone,
                numGuests,
                department,
                date,
                food,
                decorate
            }),
        })
            .then((res) => {
                if (res.error) {
                    alert(res.error);
                }else {
                    window.location = 'my-events.html';
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
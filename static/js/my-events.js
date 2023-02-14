function getMyEvents() {
    fetch(`/events`)
    .then((response) => response.json())
    .then((response) => {
        if (response.data) {
            generateTable(response.data);
        } else {
            alert("No events where found");
        }
    })
    .catch((e) => {
        console.log(e);
        alert("a server error occurred");
    });
}

function generateTable(rows) {
    const container = document.querySelector('.container');
    let html = ``;
    html += `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Place</th>
                    <th scope="col">Orderd by</th>
                    <th scope="col">Guests</th>
                    <th scope="col">Event Type</th>
                    <th scope="col">Date</th>
                    <th scope="col">Food Service</th>
                    <th scope="col">Decoration</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
        `;

        for (let i=0; i<rows.length; i++) {
            const row = rows[i];
            console.log(row);
            html += `
                <tr>
                    <td>${row.place_name}</td>
                    <td>${row.name}</td>
                    <td>${row.numGuests}</td>
                    <td>${row.department}</td>
                    <td>${new Date(row.date).toLocaleDateString('he-IL')}</td>
                    <td>${row.food}</td>
                    <td>${row.decorate}</td>
                    <td><button onclick="remove(${row.id})">Remove</button></td>
                </tr>
            `;
        }

        html += `
            </tbody>
        </table>
    `;

    container.innerHTML = html;
}

function remove(id) {
    try {
        fetch(`/events?id=${id}`, {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.error) {
                    alert(res.error);
                }
                else if (res.status === 'ok') {
                    alert('The event had been removed!');
                    window.location.reload();
                }
            })
            .catch((ex) => {
                console.log(ex);
                alert(ex);
            });
    }
    catch(e) {
        console.log(e);
        alert(e.message);
    }
}
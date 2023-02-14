let filterByNameValue = "";
let filterByPriceValue = "";
let filterByRatingValue = "";
let places = [];

fetch(`/places`)
    .then((response) => response.json())
    .then((response) => {
        if (response.data) {
            places = response.data;
            generateListItems();
        } else {
            alert("No places where found");
        }
    })
    .catch((e) => {
        console.log(e);
        alert("a server error occurred");
    });

function generateListItems() {
    document.querySelector('main').innerHTML = `
    <div class="places">
        <div class="places-filter">
            <input class="form-control filters" onChange="filterByName(value)" value="${filterByNameValue}" type="text" placeholder="By Name...">
            <input class="form-control filters" onChange="filterByPrice(value)" value="${filterByPriceValue}" type="number" placeholder="By Price...">
            <input class="form-control filters" onChange="filterByRating(value)" value="${filterByRatingValue}" type="number" placeholder="By Rating...">
        </div>
        <div class="cards"></div>
    </div>`
    places.forEach(place => {
        document.querySelector('.cards').innerHTML += `
            <div class="card">
                <img src="../images/${place.image}" class="card__image" alt="">
                <div class="card__overlay">
                    <div class="card__header">
                        <svg class="card__arc"><path></path></svg>
                        <div class="card__header-text">
                            <a href=${place.link}><h3 class="card__title">${place.name}</h3></a>
                            <span class="card__status">${place.price}$</span>
                        </div>
                    </div>
                  <button type="submit" onclick="showBidpage(${place.id})" class="btn btn-warning">SUBMIT<span class="glyphicon glyphicon-send"></span></button>
                    <p class="card__description">${place.description}</p>
                    <div class="rating-score" <ul data-rating=${place.rate}>
                            <li class="rating-score-item"></li>
                            <li class="rating-score-item"></li>
                            <li class="rating-score-item"></li>
                            <li class="rating-score-item"></li>
                            <li class="rating-score-item"></li>
                        </ul>
                    </div>
                </div>
            </div>`;
    });
}

function filterByName(name) {
    filterByNameValue = name;
    generateListItems(applyFilters())
}

function filterByPrice(price) {
    filterByPriceValue = price;
    generateListItems(applyFilters())
}

function filterByRating(rating) {
    filterByRatingValue = rating;
    generateListItems(applyFilters())
}

function applyFilters() {
    const params = new URLSearchParams({
        name: filterByNameValue,
        price: filterByPriceValue,
        rating: filterByRatingValue,
    });

    fetch(`/places/search?${params.toString()}`)
    .then((response) => response.json())
    .then((response) => {
        if (response.data) {
            places = response.data;
            generateListItems();
        } else {
            alert("No places where found");
        }
    })
    .catch((e) => {
        console.log(e);
        alert("a server error occurred");
    });
}

function showBidpage(id) {
    window.location = `bid.html?id=${id}`;
}
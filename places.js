const Places = [
    {
        "id": 1,
        "name": "The Avenue",
        "placeType": "Events Hall",
        "price": 499,
        "description": "The best events for you",
        "status": 1,
        "rate": 3,
        "image": "./images/1.png",
        "link": "https://avenue-l.co.il/en/",
    },
    {
        "id": 2,
        "name": "Gan Eden",
        "placeType": "Events Hall",
        "price": 1199,
        "description": "Rejoice Together. Grow Together.",
        "status": 1,
        "rate": 4,
        "image": "./images/2.png",
        "link": "https://www.gan-eden.co.il/en/front-page/",
    },
    {
        "id": 3,
        "name": "East TLV",
        "placeType": "Events Hall",
        "price": 299,
        "description": "Where dreams come true",
        "status": 1,
        "rate": 3,
        "image": "./images/3.png",
        "link": "https://www.east-tlv.co.il/",
    },
    {
        "id": 4,
        "name": "Avigdor",
        "placeType": "Events Hall",
        "price": 450,
        "description": "Let the next chapter begin",
        "status": 2,
        "rate": 4.5,
        "image": "./images/4.png",
        "link": "https://avigdor22.co.il/",
    },
    {
        "id": 5,
        "name": "High Event Complex",
        "placeType": "Events Hall",
        "price": 799,
        "description": "Taking you high",
        "status": 2,
        "rate": 5,
        "image": "./images/5.png",
        "link": "https://highand.co.il/english/",
    },
    {
        "id": 6,
        "name": "Jonah events",
        "placeType": "Events Hall",
        "price": 399,
        "description": "Special events on the beach",
        "status": 3,
        "rate": 2,
        "image": "./images/6.png",
        "link": "https://en.jonahevents.co.il/",
    },
    {
        "id": 7,
        "name": "The Ritz - Carlton",
        "placeType": "Events Hall",
        "price": 899,
        "description": "Event hall in Carlton TLV",
        "status": 3,
        "rate": 5,
        "image": "./images/7.png",
        "link": "https://www.ritzcarlton.com/",
    },
        {
        "id": 8,
        "name": "Colonia",
        "placeType": "Events Hall",
        "price": 5400,
        "description": "Event hall with unforgettable garden",
        "status": 3,
        "rate": 5,
        "image": "./images/8.jpg",
        "link": "https://www.colonia-events.co.il/unforgettable-event-hall/",
    },
        {
        "id": 9,
        "name": "Trask",
        "placeType": "Events Hall",
        "price": 999,
        "description": "In front of a spectacular and breathtaking view of the ",
        "status": 3,
        "rate": 5,
        "image": "./images/9.png",
        "link": "https://www.trask.co.il/",
    },
        {
        "id": 10,
        "name": "The shadow of the forest",
        "placeType": "Events Hall",
        "price": 899,
        "description": "In the heart of the Sharon there is an event garden surrounded by a natural grove with particularly magical energies.",
        "status": 3,
        "rate": 5,
        "image": "./images/10.jpg",
        "link": "https://www.tzhelhahoresh.co.il/",
    },
]

let filterByNameValue = ""
let filterByPriceValue = ""
let filterByRatingValue = ""

function generateListItems(places = Places) {
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
                <img src=${place.image} class="card__image" alt="">
                <div class="card__overlay">
                    <div class="card__header">
                        <svg class="card__arc"><path></path></svg>
                        <div class="card__header-text">
                            <a href=${place.link}><h3 class="card__title">${place.name}</h3></a>
                            <span class="card__status">${place.price}$</span>
                        </div>
                    </div>
                  <button type="submit" onclick="showBidpage()" class="btn btn-warning">SUBMIT<span class="glyphicon glyphicon-send"></span></button>
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
    return Places.filter((el) => {
        return ((el.name.toLowerCase().includes(filterByNameValue.toLowerCase())) &&
            (filterByPriceValue == "" || el.price <= filterByPriceValue) &&
            (filterByRatingValue == "" || el.rate >= filterByRatingValue))
    });
}


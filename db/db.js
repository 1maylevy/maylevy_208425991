const config = require("./db.config");
const mysql = require("mysql");

const conn = mysql.createConnection(config);
conn.connect();

createDb = () => {
    conn.query(
        `CREATE DATABASE IF NOT EXISTS web;`,
        function (err, data, fields) {
            if (err) {
                throw new Error(err.message);
            } else {
                console.log({
                    msg: "database web created!",
                });
            }
        }
    );

    conn.query(
        `CREATE TABLE IF NOT EXISTS web.users (
            id INT NOT NULL AUTO_INCREMENT,
            fullname VARCHAR(25) NOT NULL ,
            username VARCHAR(25) NOT NULL ,
            password VARCHAR(25) NOT NULL ,
            birthdate datetime NOT NULL ,
            email VARCHAR(50) NOT NULL ,
            PRIMARY KEY (id)
        );`,
        function (err, data, fields) {
            if (err) {
                throw new Error(err.message);
            } else {
                console.log({
                    msg: "users table created!",
                });
            }
        }
    );

    conn.query(
        `CREATE TABLE IF NOT EXISTS web.places (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(100) NOT NULL ,
            placeType VARCHAR(100) NOT NULL ,
            price DOUBLE NOT NULL ,
            description TEXT NOT NULL ,
            status INT NOT NULL ,
            rate DOUBLE NOT NULL ,
            image VARCHAR(100) NOT NULL ,
            link VARCHAR(100) NOT NULL ,
            PRIMARY KEY (id)
        );`,
        function (err, data, fields) {
            if (err) {
                throw new Error(err.message);
            } else {
                console.log({
                    msg: "places table created!",
                });
            }
        }
    );

    conn.query(
        `CREATE TABLE IF NOT EXISTS web.events (
            id INT NOT NULL AUTO_INCREMENT,
            placeId INT NOT NULL,
            userId INT NOT NULL,
            name VARCHAR(100) NOT NULL ,
            phone VARCHAR(15) NOT NULL ,
            numGuests INT NOT NULL ,
            department VARCHAR(50) NOT NULL ,
            date datetime NOT NULL ,
            food VARCHAR(50) NOT NULL ,
            decorate VARCHAR(3) NOT NULL ,
            PRIMARY KEY (id)
        );`,
        function (err, data, fields) {
            if (err) {
                throw new Error(err.message);
            } else {
                console.log({
                    msg: "events table created!",
                });
            }
        }
    );

    conn.query(
        `SELECT COUNT(*) as count FROM web.users`,
        function (err, data, fields) {
            if (err) {
                throw new Error(err.message);
            } else {
                results = JSON.parse(JSON.stringify(data));
                if (results[0].count === 0) {
                    for (let i = 1; i <= 5; i++) {
                        conn.query(
                            `INSERT INTO web.users (fullname, username, password, birthdate, email)
                        VALUES ('user', 'user${i}', '12345678', '1990-01-01', 'user${i}@gmail.com')`,
                            function (err, data, fields) {
                                if (err) {
                                    throw new Error(err.message);
                                } else {
                                    console.log({
                                        msg: `user${i} created!`,
                                    });
                                }
                            }
                        );
                    }
                }
            }
        }
    );

    const places = [
        {
            "id": 1,
            "name": "The Avenue",
            "placeType": "Events Hall",
            "price": 499,
            "description": "The best events for you",
            "status": 1,
            "rate": 3,
            "image": "1.png",
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
            "image": "2.png",
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
            "image": "3.png",
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
            "image": "4.png",
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
            "image": "5.png",
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
            "image": "6.png",
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
            "image": "7.png",
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
            "image": "8.png",
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
            "image": "9.png",
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
            "image": "10.png",
            "link": "https://www.tzhelhahoresh.co.il/",
        },
    ];

    conn.query(
        `SELECT COUNT(*) as count FROM web.places`,
        function (err, data, fields) {
            if (err) {
                throw new Error(err.message);
            } else {
                results = JSON.parse(JSON.stringify(data));
                if (results[0].count === 0) {
                    for (let i = 0; i < places.length; i++) {
                        const place = places[i];
                        conn.query(
                            `INSERT INTO web.places (id, name, placeType, price, description, status, rate, image, link)
                        VALUES (${place.id}, '${place.name}', '${place.placeType}', '${place.price}', '${place.description}', '${place.status}', '${place.rate}', '${place.image}', '${place.link}')`,
                            function (err, data, fields) {
                                if (err) {
                                    throw new Error(err.message);
                                } else {
                                    console.log({
                                        msg: `place${i} created!`,
                                    });
                                }
                            }
                        );
                    }
                }
            }
        }
    );
};

module.exports = { conn, createDb };

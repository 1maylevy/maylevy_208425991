const { conn } = require("./db/db");

exports.signup = (req, res) => {
    if (!req.body) {
        res.status(404).json({ error: "No form data found" });
    } else {
        conn.query(
            `INSERT INTO web.users(fullname, username, email, password, birthdate) VALUES ('${req.body.fullname}', '${req.body.username}', '${req.body.email}' ,'${req.body.password}', '${req.body.birthdate}')`,
            function (err, mysqlres) {
                if (err) {
                    res.status(500).json({ error: err.message });
                } else {
                    res.status(201).json({ response: "user created!" });
                }
            }
        );
    }
};

exports.signin = (req, res) => {
    const { username, password } = req.body;
    conn.query("SELECT * FROM web.users WHERE username = '" + username + "' AND password = '" + password + "'",
    function (err, data, fields) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!data?.length) {
            res.status(400).json({ error: 'user was not found for the given username & password' });
        }else {
            res.status(200).json({
                response: JSON.parse(JSON.stringify(data[0])),
            });
        }
    });
};

exports.getPlaces = (req, res, next) => {
    conn.query(
        "SELECT * FROM web.places",
        function (err, data, fields) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(200).json({ data });
            }
        }
    );
};

exports.searchPlaces = (req, res, next) => {
    const { name, price, rating } = req.query;

    let sql = `SELECT * FROM web.places`;
    if (name || price || rating) {
        sql += ` WHERE `;
        let where = [];

        if (name) {
            where.push(`name LIKE '%${name}%'`);
        }
        if (price) {
            where.push(`price <= ${price}`);
        }
        if (rating) {
            where.push(`rate >= ${rating}`);
        }
        
        sql += where.join(' AND ');
    }

    conn.query(sql, function (err, data, fields) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(200).json({ data });
            }
        }
    );
};

exports.getEvents = (req, res, next) => {
    conn.query(
        "SELECT e.*, p.name as place_name FROM web.events as e JOIN places as p on p.id = e.placeId",
        function (err, data, fields) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(200).json({ data });
            }
        }
    );
};

exports.createEvent = (req, res) => {
    if (!req.body) {
        res.status(404).json({ error: "No form data found" });
    } else {
        conn.query(
            `INSERT INTO web.events(placeId, userId, name, phone, numGuests, department, date, food, decorate) 
            VALUES (${req.body.placeId}, ${req.body.userId}, '${req.body.name}', '${req.body.phone}', ${req.body.numGuests} ,'${req.body.department}', '${req.body.date}', '${req.body.food}', '${req.body.decorate}')`,
            function (err, mysqlres) {
                if (err) {
                    res.status(500).json({ error: err.message });
                } else {
                    res.status(201).json({ response: "event created!" });
                }
            }
        );
    }
};

exports.deleteEvent = (req, res) => {
    const { id } = req.query;

    if (!id) {
        res.status(404).json({ error: "No event id found" });
    }
    else {
        conn.query(
            `DELETE FROM web.events WHERE id = ${id}`,
            function (err, data, fields) {
                if (err) {
                    res.status(500).json({ error: err.message });
                } else {
                    res.status(201).json({ status: 'ok' });
                }
            }
        );
    }
};
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require("./routes");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(route);

app.use(express.static(__dirname + "/views"));
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use("/images", express.static(__dirname + "/static/images"));
app.use("/styles", express.static(__dirname + "/static/styles"));
app.use("/js", express.static(__dirname + "/static/js"));

const db = require('./db/db');
db.createDb();

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
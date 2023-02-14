const express = require("express");
const controller = require('./controllers');
const router = express.Router();

router
    .route("/signin")
    .post(controller.signin);

router
    .route("/signup")
    .post(controller.signup);

router
    .route("/places")
    .get(controller.getPlaces);  

router
    .route("/places/search")
    .get(controller.searchPlaces);  

router
    .route("/events")
    .get(controller.getEvents)
    .post(controller.createEvent)
    .delete(controller.deleteEvent);

module.exports = router;
const express = require("express");
const router = express.Router();
const RoomController = require("../controllers/Rooms");

router.post("/create", RoomController.createRooms);
router.post("/bookRoom", RoomController.bookRooms);
router.get("/", RoomController.getRooms);
router.get("/booked", RoomController.bookedRooms);
router.get("/getallrooms", RoomController.getAllRooms);

module.exports = router;

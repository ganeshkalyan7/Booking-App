const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomsSchema = new Schema(
  {
    RoomName: {
      type: String,
      // required: true,
    },
    personAllowedInSingleRoom: {
      type: Number,
    },
    pricePerDay: {
      type: Number,
    },
    custamerId: {
      type: Number,
    },
    custamerName: {
      type: String,
    },

    Booked: {
      type: Boolean,
      default: false,
    },
    UserAdress: {
      type: String,
    },
  },

  { timestamps: true }
);

const rooms = mongoose.model("rooms", RoomsSchema);
module.exports = rooms;

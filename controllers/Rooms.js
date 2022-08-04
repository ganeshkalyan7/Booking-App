const rooms = require("../models/RoomShema");

//creating rooms
exports.createRooms = async (req, res, next) => {
  try {
    const newuser = new rooms({
      RoomName: req.body.RoomName,
      personAllowedInSingleRoom: req.body.personAllowedInSingleRoom,
      pricePerDay: req.body.pricePerDay,
    });
    var response = await newuser.save();
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
  }
};

//booking rooms by users
exports.bookRooms = async (req, res, next) => {
  const bookedRoom = new rooms({
    custamerName: req.body.custamerName,
    RoomName: req.body.RoomName,
    personAllowedInSingleRoom: req.body.personAllowedInSingleRoom,
    pricePerDay: req.body.pricePerDay,
    custamerId: req.body.custamerId,
    UserAdress: req.body.UserAdress,
    Booked: true,
  });
  try {
    const response = await bookedRoom.save();
    res.status(201).json({
      status: `booked room with Id r${response._id}`,
      data: {
        BookedData: response,
        createdAt: response.createdAt,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// getting booked data
exports.bookedRooms = async (req, res, next) => {
  try {
    const bookedRooms = await rooms.find({ Booked: true });
    res.status(200).json({
      bookedRooms,
      createdAt: bookedRooms.createdAt,
    });
  } catch (err) {
    console.log(err);
  }
};

//available rooms data
exports.getRooms = async (req, res, next) => {
  try {
    const getRooms = await rooms.find({ Booked: false });
    const availableRooms = getRooms.length;
    res.status(200).json({ availableRooms: availableRooms, getRooms });
  } catch (err) {
    console.log(err);
  }
};

//complete rooms details
exports.getAllRooms = async (req, res, next) => {
  try {
    const getRooms = await rooms.find();
    const totalRomms = getRooms.length;
    res.status(200).json({ totalRooms: totalRomms, getRooms });
  } catch (err) {
    console.log(err);
  }
};

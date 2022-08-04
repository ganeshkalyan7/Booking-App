const express = require("express");
const app = express();
const PORT = process.env.PORT || 7000;
const mongo = require("./Connect");
const routers = require("./routers/Roomrouter");
const dotenv = require("dotenv");
dotenv.config();

mongo.connect();
app.use(express.json());
app.use("/rooms", routers);

app.use("/", (req, res, next) => {
  res.send("hey welcome to hiddenWoods Rooms");
});
app.listen(PORT, () => console.log(`server is running on port number ${PORT}`));

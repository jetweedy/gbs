const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const routes = require("./routes");
app.use(cors());
app.use(routes);


// Define API routes here


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
//	res.send("test");
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});










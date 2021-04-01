const express = require("express");
const cors = require("cors");
const path = require("path");
// import routes
const testimonialsRoutes = require("./routes/testimonials.routes");
const concertsRoutes = require("./routes/concerts.routes");
const seatsRoutes = require("./routes/seats.routes");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "/client/public")));
app.use("/api", testimonialsRoutes); // add testimonials routes to server
app.use("/api", concertsRoutes);
app.use("/api", seatsRoutes);

app.use((req, res) => {
  res.status(404).send("404 not found...");
});
app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port: 8000");
});

const express = require("express");
const connectDB = require("./db/connection");
const crudRoute = require("./routes/crudRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/", crudRoute);

app.listen(8000, () => {
  connectDB();
  console.log("Server is running on port 8000");
});

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const todoRoutes = require("./routes/todos");

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/todos", todoRoutes);

const CONNECTION_URL = process.env.MONGO_STR;
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => app.listen(PORT, () => console.log("Server running")))
    .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

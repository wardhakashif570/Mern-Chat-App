const dotenv = require("dotenv");
const express = require("express");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes')

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("API is running Successfully");
})
app.use("/api/user", userRoutes);
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server strated on PORT ${PORT}`));


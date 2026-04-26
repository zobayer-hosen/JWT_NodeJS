const express = require("express")
const authRoute = require("./routes/auth.route")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:5175"], // Support all Vite ports
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoute)
module.exports = app;
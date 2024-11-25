const express = require("express");
const app = express();
const cookiePaser = require("cookie-parser");

// Importing routes
const userRoutes = require("./router/user");

app.use(express.json()); 
app.use(cookiePaser());  

require("dotenv").config();

const PORT = 3000;

// Using the user routes for any request starting with "/"
app.use("/", userRoutes);

// Default route to confirm server is running
app.use("/", (req, res) => {
    res.send("<h1>Server is Running</h1>");
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});

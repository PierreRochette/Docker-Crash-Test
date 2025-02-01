const express = require("express"); 
const app = express(); 
app.use(express.json());

const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, '.env')})

require("./routes/exampleRoutes")(app); 

const PORT = process.env.PORT

const db = require("./models"); 

db.sequelize.sync()
    .then(() => {
        console.log("Synced DB.")
    })
    .catch((err) => {
        console.log("Failed to sync db :", err); 
    }); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
}); 

app.get("/api", (req, res, next) => {
    res.json({ message: "Hello, World!"})
}); 

app.post("/api", (req, res, next) => {
    const message = req.body.message; 
    res.json({"receivedMessage": message}); 
}); 




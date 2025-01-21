const express = require("express"); 
const app = express(); 
app.use(express.json());

const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, '.env')})

const PORT = process.env.PORT

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




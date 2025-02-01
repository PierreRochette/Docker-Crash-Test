const { getExamples, createExample } = require("../controllers/exampleControllers");

module.exports = app => {

    

    const router = require("express").Router(); 

    router.get("/", getExamples); 
    router.post("/", createExample); 
    app.use("/api/examples", router); 

}
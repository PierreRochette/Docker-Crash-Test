const db = require("../models"); 
const Example = db.Example; 

exports.createExample = async (req, res) => {

    const { username } = req.body; 

    try {

        if (!username) {
            throw Error("Les champs doivent être renseignés"); 
        }

        const newExample = await Example.create({ username }); 

        return res.status(201).send(newExample); 

    } catch (err) {
        return res.status(500).send({ message: err.message });  
    }

}

exports.getExamples = async (req, res) => {

    try {

        const examples = await Example.findAll(); 

        return res.status(200).send(examples); 

    } catch (err) {
        return res.status(500).send({ message: err.message }); 
    }

}
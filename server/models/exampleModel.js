const { Model, DataTypes } = require("sequelize"); 
const { sequelize } = require(".");

class Example extends Model {}

module.exports = (sequelize) => {

    Example.init (
        {
            username: {
                type: DataTypes.STRING, 
                allowNull: false,
            }
        }, 
        {
            sequelize, 
            modelName: "Example", 
            tableName: "example"
        }
    ); 

    return Example; 

}
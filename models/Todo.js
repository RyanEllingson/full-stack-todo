const Sequelize = require("Sequelize");
// Create function for index file to make the things work
module.exports = function(sequelize, DataTypes) {
    // This class will get attached to the db
    class Todo extends Sequelize.Model {}
    // Define the schema
    Todo.init({
        task: {
            type: DataTypes.STRING,
            allowNull: false
        },
        done: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, { sequelize, modelName: "Todo" } );

    // Do this in the server
    // Todo.sync();
    // Return the todo so it is attached to the db
return Todo;
    
}



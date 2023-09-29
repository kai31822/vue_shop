//import sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: process.env.DB_TYPE,
    host: process.env.DB_HOST,
});
//async function
const connectToDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
module.exports = { sequelize, connectToDB };

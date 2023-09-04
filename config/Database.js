import {Sequelize} from "sequelize";

const db = new Sequelize('db_laundry','root','',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;
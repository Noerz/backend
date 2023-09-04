import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Pelanggan = db.define('pelanggan',{
    pelanggan_id: DataTypes.INTEGER,
    pelanggan_nama: DataTypes.STRING,
    pelanggan_hp: DataTypes.INTEGER,
    pelanggan_alamat: DataTypes.STRING,
},{
    freezeTableName: true
});

export default Pelanggan;

(async()=>{
    await db.sync();
})();
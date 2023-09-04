import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Pakaian = db.define('pakaian',{
    pakaian_id: DataTypes.INTEGER,
    pakaian_transaksi: DataTypes.INTEGER,
    pakaian_jenis: DataTypes.STRING,
    pakaian_jumlah: DataTypes.INTEGER,
},{
    freezeTableName: true
});

export default Pakaian;

(async()=>{
    await db.sync();
})();
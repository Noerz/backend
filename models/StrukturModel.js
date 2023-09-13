import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Struktur = db.define('struktur', {
   
    name: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    nik: DataTypes.STRING,
    
    
}, {
    //prevent sequelize transform table name into plural
    freezeTableName: true,
})
export default Struktur;

(async()=>{
    await db.sync()
    .then(() => {
      console.log('Tabel struktur telah dibuat');
    })
    .catch((err) => {
      console.error('Gagal membuat tabel struktur', err);
    });
})();
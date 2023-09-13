import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import { config } from 'dotenv';
config();
import AdminRoute from "./routes/AdminRoute.js";
import UserRoute from "./routes/UserRoute.js";
import StrukturRoute from "./routes/StrukturRoute.js";
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
})
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(FileUpload());
app.use(express.static("public"));
app.use(AdminRoute);
app.use(UserRoute);
app.use(StrukturRoute);

app.listen(process.env.PORT, () => console.log('server berjalan pada port ' + process.env.PORT));
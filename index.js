import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import AdminRoute from "./routes/AdminRoute.js";
import PelangganRoute from "./routes/PelangganRoute.js";
import PakaianRoute from "./routes/PakaianRoute.js";
import UserRoute from "./routes/UserRoute.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(FileUpload());
app.use(express.static("public"));
app.use(AdminRoute);
app.use(PelangganRoute);
app.use(PakaianRoute);
app.use(UserRoute);

app.listen(5000, () => console.log('Server Up and Running...'));
import express from "express";
const router = express.Router();
import {
    RegisterCustomer,
    GetCustomer,
} from "../controllers/UserController.js";

//register new user
router.post('/addNewCustomer', RegisterCustomer);
router.get('/getCustomer',GetCustomer);

export default router;
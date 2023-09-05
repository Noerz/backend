import express from "express";
const router = express.Router();
import {
    RegisterCustomer
} from "../controllers/UserController.js";

//register new user
router.post('/addNewCustomer', RegisterCustomer);

export default router;
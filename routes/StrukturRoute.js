import express from "express";
import {
    getStruktur, 
    getStrukturById,
    createStruktur,
} from "../controllers/StrukturController.js";
 
const router = express.Router();
 
router.get('/struktur', getStruktur);
router.get('/struktur/:id',getStrukturById);
router.post('/struktur',createStruktur);
 
export default router;
import express from "express";
import {
    getPakaian,
    /*getProductById,
    saveProduct,
    updateProduct,
    deleteProduct*/
} from "../controllers/PakaianController.js";

const router = express.Router();

router.get('/pakaian', getPakaian);
/*router.get('/products/:id', getProductById);
router.post('/products', saveProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);*/

export default router;
import express from "express";
import {
    getPelanggan,
    getPelangganById,
    createPelanggan,
    updatePelanggan,
    deletePelanggan
} from "../controllers/PelangganController.js";

const router = express.Router();

router.get('/pelanggan', getPelanggan);
router.get('/Pelanggan/:id', getPelangganById);
router.post('/Pelanggan', createPelanggan);
router.patch('/Pelanggan/:id', updatePelanggan);
router.delete('/Pelanggan/:id', deletePelanggan);

export default router;
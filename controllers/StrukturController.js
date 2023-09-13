import Struktur from "../models/StrukturModel.js";

export const getStruktur = async (req, res) => {
    try {
        const response = await Struktur.findAll();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log(error.message);
    }

}

export const getStrukturById = async (req, res) => {
    try {
        const response = await Struktur.findOne({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log(error.message);
    }
}

export const createStruktur = async (req, res) => {
    const { name, jabatan, nik } = req.body;
    try {
        const struktur = await Struktur.create({ name, jabatan,nik });
        res.status(201).json({ message: 'Struktur created', struktur });
    } catch (error) {
        console.error("Error occurred while creating struktur:", error);
        res.status(500).json({ error: "Failed to create admin" });
    }
};
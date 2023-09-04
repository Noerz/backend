import Pelanggan from "../models/PelangganModel.js";
import path from "path";
import fs from "fs";

export const getPelanggan = async(req, res)=>{
    try {
        const response = await Pelanggan.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPelangganById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createPelanggan = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updatePelanggan = async(req, res) =>{
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deletePelanggan = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id,
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
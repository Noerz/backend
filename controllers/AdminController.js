import Admin from "../models/AdminModel.js";
 
export const getAdmin = async(req, res) =>{
    try {
        const response = await Admin.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getAdminById = async(req, res) =>{
    try {
        const response = await Admin.findOne({
            where:{
                username: req.params.username
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createAdmin = async(req, res) =>{
    const username = req.params.username;
    const password = req.params.password;
    try {
        await Admin.create({username: username, password: password});
        res.status(201).json({msg: "Admin Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateAdmin = async(req, res) =>{
    try {
        await Admin.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Admin Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteAdmin = async (req, res) => {
    try {
      const id = req.params.id;
      const admin = await Admin.findOne({ where: { id } });
  
      if (!admin) {
        return res.status(404).json({ error: "Admin not found" });
      }
  
      await admin.destroy();
      res.status(200).json({ msg: "Admin Deleted" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Failed to delete admin" });
    }
  };
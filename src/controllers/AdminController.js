const AdminModel = require("../models/AdminModel");
const { validationPassword, validationName } = require("../util/helpers");
const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');

class AdminController{
    async CreateAdmin(user, password) {
        try {
            if (!validationPassword(password)) {
                throw new Error("Contraseña invalida");
            }
             const SALT = parseInt(process.env.BCRYPT_SALT);
             const hash = await bcrypt.hash(password, SALT);

            const admin = AdminModel({
                user:user,
                password:hash,
            })
            const saveAdmin= await admin.save();
        } catch (error) {
            throw error;
        }
    }

    async Login(req, res){
        try {
            const {user, password} = req.body;
            if (!validationName(user)) {
                throw new Error("Debe ingresar una expresion valida.");
            } 
            if (!validationPassword(password)) {
                throw new Error("Debe ingresar una expresion valida.");
            } 

            const admin= await AdminModel.findOne({user:user});

            if (!admin) {
                return res.status(404).json({message:"Usuario y/o contraseña incorrectos."})
            }

            const comparePass= await bcrypt.compare(password, admin.password);
            
            if (!comparePass) {
                return res.status(404).json({message:"Usuario y/o contraseña incorrectos."})
            }

            const token = jwt.sign({
                user: admin.user,
            }, process.env.SECRET_KEY, {expiresIn:'1D'});

            return res.status(200).json({user:admin.user, token:token})
        } catch (error) {
            return res.status(500).json({message:"Error en logueo del administrador"})
        }
    }
}
module.exports = AdminController;
const AdminController =require("../controllers/AdminController");

const AdminRoutes=(base, app)=>{
    const adminController = new AdminController();
    
    app.post(`${base}`, async (req, res)=>{
        try {
            const {user, password}= req.body;
            await adminController.CreateAdmin(user, password);
            res.status(201).json({message:"Existo al crear el administrador."})
        } catch (error) {
            console.error("Error al crear el admnistrador", error);
            res.status(500).json({message:"Error al crear el administrador"})
        }
    });

    app.post(`${base}/login`, async(req, res, next)=>{
        try {
           const response= await adminController.Login(req, res);
           return response;
        } catch (error) {
            next(error);
        }
    })
}

module.exports = AdminRoutes;
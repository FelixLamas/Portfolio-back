const ProjectController = require("../controllers/ProjectController");
const Auth = require("../util/AuthMiddleware")

const ProjectRoutes = (base, app) => {
  const projectController = new ProjectController();

  app.post(`${base}`, Auth.isAuth, async (req, res, next) => {
    try {
      const { name, description, image, url, repository } = req.body;
      await projectController.Create(name, description, image, url, repository);
      res
        .status(201)
        .json({ message: "Exito, se creo la tecnología correctamente." });
    } catch (error) {
      console.error("Error al crear el Proyecto.", error);
      return res.status(500).json({ message: "Error al crear el Proyecto." });
    }
  });

  app.get(`${base}/getProjects`, async (req, res) => {
    try {
      const projects = await projectController.Get();
      return res.status(200).json(projects);
    } catch (error) {
      console.error("Error al obtener los Proyectos.", error);
      return res
        .status(500)
        .json({ message: "Error al obtener los proyectos." });
    }
  });

  app.delete(`${base}/delete/:id`, Auth.isAuth, async (req, res, next)=>{
    try {
      const {id}=req.params;
      console.log(id);
      await projectController.Delete(id);
      res.status(200).json({message:"Existo al eliminar la tecnología."})
    } catch (error) {
      res.status(500).json({message:"Error al eliminar el proyecto."});
    }
  })

  app.put(`${base}/update/:id`, Auth.isAuth, async (req, res, next)=>{
    try {
      const {id}=req.params;
      const { name, description, image, url, repository } = req.body;
      await projectController.Update(id,name, description, image, url, repository );
      res.status(200).json({message:"Se edito el proyecto correctamente."})
    } catch (error) {
      res.status(500).json({message:"Error al editar el proyecto."})
    }
  })
};

module.exports = ProjectRoutes;

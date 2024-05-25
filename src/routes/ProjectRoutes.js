const ProjectController = require("../controllers/ProjectController");

const ProjectRoutes = (base, app) => {
  const projectController = new ProjectController();

  app.post(`${base}`, async (req, res) => {
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
};

module.exports = ProjectRoutes;

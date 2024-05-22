const TechnologyController = require("../controllers/TechnologyController");

const TechnologyRoutes = (base, app) => {
  const technologyController = new TechnologyController();

  app.post(`${base}`, async (req, res) => {
    try {
      const { name, description } = req.body;
      await technologyController.Create(name, description);
      res.status(201).json("Exito, se creo la tecnología correctamente.");
    } catch (error) {
      console.error("Error al crear la tecnología.", error);
      return res.status(500).json({ message: "Error al crear la tecnología." });
    }
  });

  app.get(`${base}/getTechnologies`, async (req, res) => {
    try {
      const technolgies = await technologyController.Get();
      return res.status(200).json(technolgies);
    } catch (error) {
      console.error("Error al obtener las tecnologias", error);
      return res
        .status(500)
        .json({ message: "Error al obtener las tecnologías" });
    }
  });
};

module.exports = TechnologyRoutes;

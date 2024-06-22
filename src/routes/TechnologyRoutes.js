const TechnologyController = require("../controllers/TechnologyController");

const TechnologyRoutes = (base, app) => {
  const technologyController = new TechnologyController();

  app.post(`${base}`, async (req, res) => {
    try {
      const { name, icon, seniority } = req.body;
      await technologyController.Create(name, icon, seniority);
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

  app.delete(`${base}/delete/:id`, async (req, res)=>{
    try {
      const {id}=req.params;
      await technologyController.Delete(id);
      res.status(200).json({message:"Existo al eliminar la tecnología."})
    } catch (error) {
      res.status(500).json({message:"Error al eliminar la tecnología."});
    }
  })

  app.put(`${base}/update/:id`, async (req, res)=>{
    try {
      const {id}=req.params;
      const {name, icon, seniority}= req.body;
      await technologyController.Update(id,name, icon, seniority);
      res.status(200).json({message:"Se edito la tecnologia correctamente."})
    } catch (error) {
      res.status(500).json({message:"Error al editar la tecnología."})
    }
  })
};

module.exports = TechnologyRoutes;

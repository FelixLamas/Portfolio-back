const ProjectModel = require("../models/ProjectModel");
const {
  validationName,
  validationDescription,
  validateUrl,
} = require("../util/helpers");


class ProjectController {
  async Create(name, description, image, url, repository) {
    try {
      if (!validationName(name)) {
        throw new Error("Nombre del Proyecto invalido.");
      }
      if (!validateUrl(image)) {
        throw new Error("Imagen del proyecto invalida.");
      }
      if (!validationDescription(description)) {
        throw new Error("Descripción del proyecto invalido.");
      }
      if (!validateUrl(url)) {
        throw new Error("URL del proyecto invalido.");
      }
      if (!validateUrl(repository)) {
        throw new Error("Repositorio del proyecto invalido.");
      }

      const newProject = ProjectModel({
        name: name,
        description: description,
        image: image,
        url: url,
        repository: repository,
      });
      const saveProject = await newProject.save();
    } catch (error) {
      throw error;
    }
  }

  async Get() {
    try {
      const projects = await ProjectModel.find({});
      return projects;
    } catch (error) {
      throw error;
    }
  }

  async Delete(id){
    try {
      await ProjectModel.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }

  async Update(id,name, description, image, url, repository){
    try {
      await ProjectModel.findByIdAndUpdate(id, {
        name:name,
        description:description,
        image:image,
        url:url,
        repository:repository,
      })
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProjectController;

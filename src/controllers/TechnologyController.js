const TechnologyModel = require("../models/TechnologyModel");
const {
  validationName,
  validateUrl,
  validationSeniority,
} = require("../util/helpers");

class TechnologyController {
  async Create(name, icon, seniority) {
    try {
      if (!validationName(name)) {
        throw new Error("Nombre de la tecnología invalido.");
      }
      if (!validateUrl(icon)) {
        throw new Error("Icono de la tecnología invalido.");
      }
      if (!validationSeniority(seniority)) {
        throw new Error("Nombre de la tecnología invalido.");
      }
      const newTechnology = TechnologyModel({
        name: name,
        icon: icon,
        seniority: seniority,
      });
      const saveTechnology = await newTechnology.save();
    } catch (error) {
      throw error;
    }
  }
  
  async Get() {
    try {
      const technologies = await TechnologyModel.find({});
      return technologies;
    } catch (error) {}
    throw error;
  }
  
  async Delete(id){
    try {
      await TechnologyModel.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }

  async Update(id, name, icon, seniority){
    try {
      await TechnologyModel.findByIdAndUpdate(id, {
        name:name,
        icon:icon,
        seniority:seniority,
      })
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TechnologyController;

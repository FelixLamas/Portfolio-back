const TechnologyModel = require("../models/TechnologyModel");
const { validationName, validationDescription } = require("../util/helpers");

class TechnologyController {
  async Create(name, description) {
    try {
      if (!validationName(name)) {
        throw new Error("Nombre de la tecnología invalido.");
      }
      if (!validationDescription(description)) {
        throw new Error("Nombre de la tecnología invalido.");
      }
      const newTechnology = TechnologyModel({
        name: name,
        description: description,
      });
      const saveTechnology = await newTechnology.save();
    } catch (error) {
      throw error;
    }
  }
  async Get() {
    try {
      const technologies = await TechnologyModel.find({}, "-_id");
      return technologies;
    } catch (error) {}
    throw error;
  }
}

module.exports = TechnologyController;

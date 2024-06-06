const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectSchema = new Schema({
  name: {
    type: String,
    require: (true, "El nombre del proyecto es requrido"),
    minLength: 4,
    maxLength: 100,
    unique: true,
  },
  description: {
    type: String,
    require: (true, "La descripción es requerida."),
    minLength: 4,
    maxLength: 1500,
  },
  image: {
    type: String,
    require: (true, "El icono de la tecnología es requerido."),
  },
  url: {
    type: String,
    require: (true, "El icono de la tecnología es requerido."),
  },
  repository: {
    type: String,
    require: (true, "El icono de la tecnología es requerido."),
  },
});

const ProjectModel = mongoose.model("Project", ProjectSchema);

module.exports = ProjectModel;

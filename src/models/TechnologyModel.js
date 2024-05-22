const mongoose = require("mongoose");
const { Schema } = mongoose;

const TechnologySchema = new Schema({
  name: {
    type: String,
    require: (true, "El nombre de la tecnología es requerido."),
    minLength: 1,
    maxLength: 25,
    unique: true,
  },
  icon: {
    type: String,
    require: (true, "El icono de la tecnología es requerido."),
  },
  description: {
    type: String,
    require: (true, "La descripción es requerida."),
    minLength: 4,
    maxLength: 200,
  },
});

const TechnologyModel = mongoose.model("Technology", TechnologySchema);

module.exports = TechnologyModel;

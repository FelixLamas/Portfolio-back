const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdminSchema = new Schema({
  user: {
    type: String,
    require: (true, "El usuario es requrido"),
    minLength: 4,
    maxLength: 100,
    unique: true,
  },
  password: {
    type: String,
    require: (true, "La contraseña es requerida."),
    minLength: 8,
    
  },
  
});

const AdminModel = mongoose.model("Admin", AdminSchema);

module.exports = AdminModel;

const mongoose = require("mongoose");

const crudModel = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
});

const crudModelSchema = mongoose.model("Crud", crudModel);
module.exports = {
  crudModelSchema,
};

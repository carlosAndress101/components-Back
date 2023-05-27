const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
  {
    descripcion: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model.Category || mongoose.model("Category_colection", CategorySchema);

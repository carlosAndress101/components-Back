import mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema(
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

export default mongoose.model.Category ||
  mongoose.model("Category_colection", CategorySchema);

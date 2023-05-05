import {mongoose, Schema} from "mongoose";


export const ComponentSchema = new mongoose.Schema({
    name:{type: String,
    required: [true, "Please indicate the name of the component"],
    trim:true
    },
    color:{type: String},
    estado:{type: String},
    modelo:{type: String},
    marca:{type: String},
    linea:{type: String},
    descripcion:{type: String,
    trim:true
    },
    categoryId:{type: mongoose.Schema.ObjectId, ref:'Category_colection'}
},{
    timestamps:true,
    versionKey: false
});

export default mongoose.model.Component || mongoose.model('Component', ComponentSchema);
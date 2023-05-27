const Component = require('../model/Component.model.js')
const Category = require('../model/Category.js')


async function createComponent(req, res){
    const component =  Component(req.body)
    const newComponent = await component.save();
    if(newComponent){
        return res.status(201).send({message:"Save successfully"});
    }else{
        return res.status(500).send({message:"Cannot save component"})
    }
}

async function createCategory(req, res){
    const category =  Category(req.body)
    const newCategory = await category.save()
    if(newCategory){
        return res.status(201).send({message:"Save successfully"});
    }else{
        return res.status(500).send({message:"Cannot save category"})
    }
}

async function findComponent(req, res){
    const component = await Component.find().populate({path:'categoryId'});
    if(component){
        return res.status(201).send({component});
    }else{
        return res.status(501).send({message:"there are no components"})
    }
}

async function findOneComponent(req, res){
    try {
    const component = await Component.findById(req.params.id);
    if(component) return res.status(201).send({component});
    
    } catch (error) {
        res.status(501).send({error:"this component does not exist"})
    }
}

async function updateComponent(req, res){
    try {
        const {name, color, estado, modelo, marca, linea, descripcion} = req.body
        const component = await Component.findByIdAndUpdate(req.params.id, {name, color, estado, modelo, marca, linea, descripcion}, {new:true});
        if(component) return res.status(201).json({component});
  
    } catch (error) {
        return res.status(500).send({ error:"Component Not Found...!" });
    }
}

async function deleteComponent(req, res){
    try {
        const component = await Component.findByIdAndDelete(req.params.id);
        if(component){
            return res.status(201).send({message:"Deleted successfully"});
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {deleteComponent, updateComponent, findComponent, findOneComponent, createCategory, createComponent}




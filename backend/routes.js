const akses = require("express").Router();
const BukuModel = require("./model.js");
akses.route("/").get((req,res)=>{
    BukuModel.find()
    .then((items)=>res.status(200).json(items))
    .catch((error)=>res.status(400).json(error.message));
});

akses.route("/delete/:id").delete((req,res)=>{
    BukuModel.findByIdAndDelete(req.params.id)
    .then(()=>res.status(200).json("Buku Dihapus."))
    .catch((error)=>res.status(400).json(error.message));
});

akses.route("/update/:id").put((req,res)=>{
    BukuModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedItem)=>res.status(200).json(updatedItem))
    .catch((error)=>res.status(400).json(error.message));
});

akses.route("/add").post((req,res)=>{
    BukuModel.create(req.body)
    .then((createdItem)=>res.status(200).json(createdItem))
    .catch((error)=>res.status(400).json(error.message));
})

module.exports = akses;
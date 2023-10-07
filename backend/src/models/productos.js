const mongoose =require('mongoose')

const prosuctoSchema = new mongoose.Schema(
    {
        nombre:{type:String, require:true},
        descripcion:String,
        img: File,
        precio: Number,
        categories:[{
        type:mongoose.Schema.type.ObjectId
    }]
    }
)

const  Producto = mongoose.model('producto',prosuctoSchema)

module.exports = Producto


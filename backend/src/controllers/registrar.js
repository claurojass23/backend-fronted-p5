const mongoose =require('mongoose')

const registroSchema = new mongoose.Schema(
    {
        nombre:{type:String, 
            require:true},
        email:{type:String,
            require:true,
            match:[/\S+@\S+\.\S+/, 'Email inavalido']},
        password:{type:String,
            length:[6, 'debe ser maximo 6 caracteres']},
        
    }
)

const  Registro = mongoose.model('registro',registroSchema)

module.exports = Registro

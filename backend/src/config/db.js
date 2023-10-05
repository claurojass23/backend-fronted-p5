const mongoose = require('mongoose');
require('dotenv').config()

const connect = async (uri) => {
    try {
        const connection = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Se ha conectado correctamente:', connection.connection.host);
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
};

module.exports = connect;


/* const mongoose = require('mongoose')

const connect = async ()=>{
    const connection = await mongoose.connect(`process.env.MONGO_URL+/proyecto5`)
    console.log('se ha conectado correctamente:', connection.connection.host)
}

module.exports = connect */

import mongoose from "mongoose"

//En la linea 5 estamos definiendo cómo deben ser los datos de un usuario en nuestra base de datos. Un usuario debe tener un nombre de usuario (username), un correo electrónico (email), y una contraseña (password).

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  }
}, {
    timestamps: true
})

// en la linea 26 creamos el modelo de User:

export default mongoose.model('User', userSchema)

//Aquí estamos creando un modelo llamado 'User' basado en el esquema que acabamos de definir. Un modelo en Mongoose nos permite interactuar fácilmente con la base de datos y realizar operaciones como crear, leer, actualizar y eliminar datos.

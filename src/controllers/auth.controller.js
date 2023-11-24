import User from '../models/usesr.model.js'
import bcrypt from 'bcrypt'
import { createAccessToken } from '../libs/jwt.js';

//registro de usuario 

export const register = async (req, res) => {
  const { email, password, username } = req.body

  try {
    const passwordHash = await bcrypt.hash(password, 10) // hash

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
    //guardarmos el usuario
    const userSaved = await newUser.save();
    //generamos el token
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie('token', token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updateAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

// login
export const login = (req, res) => res.send("login");

/* export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const match = await bcrypt.compare(password, userFound.password);
    if (!match)
      return res.status(400).json({ message: "Contraseña incorrecta" });

    //Debemos generar el token nuevamente

    const token = await createAccessToken({ id: userFound._id });
    res.cookie("token", token);
    res.json({
      message: "Bienvenido!",
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al loguearse", error });
  }
} */

// log out

/* export const logout = async (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.status(200).json({ message: "Hasta Pronto!" });
} */

export const profile = async (req, res) => {
  try {
    



  } catch (error) {

  }
}



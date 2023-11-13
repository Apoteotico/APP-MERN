import User from '../models/usesr.model.js'

export const register = async (req, res) => {
  const { email, password, username } = req.body

  try {
    const newUser = new User({
      username,
      email,
      password
    })
    const saveUser = await newUser.save();
    res.json(saveUser);
  } catch (error) {
    console.log(error)
  }

};

export const login = (req, res) => res.send("login");

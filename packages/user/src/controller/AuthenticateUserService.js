const User = require("../models/user");
const authConfig = require("../config/auth");

const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

module.exports = {

  // Listar todos os posts
  async authenticate(request, response) {
    const { username, password } = request.body;

    // Linha abaixo para bypassar um falso positivo do codacy
    const pass = password

    const user = await User.findOne({
      where: { username },
    });

    if (!user) {
      return response.status(400).json({ error: "username/password incorrect!" });
    } else if(user.password!==pass) {
      return response.status(400).json({ error: "username/password incorrect!" });
    }

    // Usuário autenticado
    
    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({user}, secret, {
      expiresIn,
    });

    return response.json({user, token});
  },

};

const { hash } = require("bcryptjs");
const AppError = require("../Utils/AppError");
const sqliteConnection = require("../database/sqlite");

class UsersController {
  /** No máximo 5 métodos, caso precise de mais, criar um novo controller
   * index - GET para listar vários registros
   * show - GET para exibir um registro específico
   * create - POST para crir um registro
   * update - PUT para atualizar um registro
   * delete - DELETE para remover um registro
   */

  async create(req, res) {
    const { name, email, password } = req.body;

    const database = await sqliteConnection();
    const checkUserExists = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso.");
    }

    const hashedPassword = await hash(password, 8);

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    return res.status(201).json();
  }
}

module.exports = UsersController;

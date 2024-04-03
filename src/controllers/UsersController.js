const AppError = require("../Utils/AppError");

class UsersController {
  /** No máximo 5 métodos, caso precise de mais, criar um novo controller
   * index - GET para listar vários registros
   * show - GET para exibir um registro específico
   * create - POST para crir um registro
   * update - PUT para atualizar um registro
   * delete - DELETE para remover um registro
   */

  create(req, res) {
    const { name, email, password } = req.body;

    if (!name) {
      throw new AppError("Nome é obrigatório!");
    }

    res.status(201).json({ name, email, password });
  }
}

module.exports = UsersController;

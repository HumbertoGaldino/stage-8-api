const { Router, response } = require("express");

const userRoutes = Router();

userRoutes.post("/", (req, res) => {
  const { name, email, password } = req.body;

  response.json({ name, email, password });
});

module.exports = userRoutes;

const { Router } = require("express");

const AuthController = require("../controllers/auth.controllers.js");

const authRouter = Router();

authRouter.post("/registration", AuthController.registration);
authRouter.get("/login", AuthController.login);
authRouter.get("/logout", AuthController.logout);

module.exports = authRouter;

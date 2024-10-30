import { Router } from "express";
import AuthController from "../controller/AuthController.js";

const routerAuth = Router()

routerAuth.post('/register',AuthController.register)
routerAuth.post('/login',AuthController.login)

export default routerAuth
import { Router } from "express";
import AuthController from "../controller/AuthController.js";

const routerAuth = Router()

routerAuth.post('/register',AuthController.register)
routerAuth.post('/login',AuthController.login)
routerAuth.get('/',AuthController.get)
routerAuth.get('/:id',AuthController.getDetail)

export default routerAuth
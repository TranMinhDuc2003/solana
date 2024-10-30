import { Router } from "express";
import CategoryController from "../controller/CategoryController.js";

const routerCategory = Router()

routerCategory.post('/', CategoryController.create)
routerCategory.get('/', CategoryController.get)
routerCategory.get('/:id', CategoryController.getDetail)
routerCategory.delete('/:id', CategoryController.delete)
routerCategory.patch('/:id', CategoryController.update)

export default routerCategory
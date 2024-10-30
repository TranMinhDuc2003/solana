import { Router } from "express";
import CauseController from "../controller/CauseController.js";

const routerCause = Router()

routerCause.post('/', CauseController.create)
routerCause.get('/', CauseController.get)
routerCause.get('/:id', CauseController.getDetail)
routerCause.delete('/:id', CauseController.delete)
routerCause.patch('/:id', CauseController.update)

export default routerCause
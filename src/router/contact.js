import { Router } from "express";
import ContactController from "../controller/ContactController.js";
const routerContact = Router()

routerContact.post('/', ContactController.create)
routerContact.get('/', ContactController.get)
routerContact.get('/:id', ContactController.getDetail)
routerContact.delete('/:id', ContactController.delete)
routerContact.patch('/:id', ContactController.update)

export default routerContact
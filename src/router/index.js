import { Router } from "express";
import routerAuth from "./auth.js";
import routerCategory from "./category.js";
import routerContact from "./contact.js";

const router = Router()
router.use('/auth', routerAuth)
router.use('/category', routerCategory)
router.use('/contact', routerContact)

export default router

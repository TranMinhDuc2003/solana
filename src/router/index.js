import { Router } from "express";
import routerAuth from "./auth.js";
import routerCategory from "./category.js";
import routerContact from "./contact.js";
import routerCause from "./cause.js";

const router = Router()
router.use('/auth', routerAuth)
router.use('/category', routerCategory)
router.use('/contact', routerContact)
router.use('/cause', routerCause)

export default router

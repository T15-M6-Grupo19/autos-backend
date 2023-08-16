import { Router } from "express"
import { ensureBodyIsValidMW } from "../middlewares/ensureBodyIsValid.middleware"
import { loginSchema } from "../schemas/login.schemas"
import { createSessionController } from "../controllers/login.controllers"

const loginRoutes:Router = Router()

loginRoutes.post('', ensureBodyIsValidMW(loginSchema),createSessionController)

export default loginRoutes
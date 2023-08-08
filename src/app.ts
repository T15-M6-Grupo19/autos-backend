import "express-async-errors"
import "reflect-metadata"
import cors from "cors"
import express, { Application } from "express"
import { handleErrors } from "./error"
import loginRoutes from "./routes/login.routes"
import salesAdRoutes from "./routes/anuncios.routes"


const app:Application = express()
app.use(express.json())

app.use(cors())

app.use('/login', loginRoutes)
app.use('/users',)
app.use('/anuncios', salesAdRoutes)

app.use(handleErrors)
export default app
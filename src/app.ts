import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import express, { Application } from "express";
import { handleErrors } from "./error";
import loginRoutes from "./routes/login.routes";
import salesAdRoutes from "./routes/salesAd.routes";
import { userRoutes } from "./routes/users.routes";
import commentRoutes from "./routes/comment.routes";
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './documentation/swagger.json';

const app: Application = express();
app.use(express.json());

app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/salesAd", salesAdRoutes);
app.use("/comment", commentRoutes);

app.use(handleErrors);
export default app;

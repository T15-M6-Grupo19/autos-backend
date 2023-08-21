import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import express, { Application } from "express";
import { handleErrors } from "./error";
import loginRoutes from "./routes/login.routes";
import salesAdRoutes from "./routes/salesAd.routes";
import { userRoutes } from "./routes/users.routes";
import commentRoutes from "./routes/comment.routes";

const app: Application = express();
app.use(express.json());

app.use(cors());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/salesAd", salesAdRoutes);
app.use("/comment", commentRoutes);

app.use(handleErrors);
export default app;

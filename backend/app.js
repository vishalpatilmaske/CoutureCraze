import userRoutes from "../backend/src/routes/user.js";
import express from "express";
const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

export { app };

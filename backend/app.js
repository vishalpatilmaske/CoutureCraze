import userRoutes from "../backend/src/routes/user.js";
import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

export { app };

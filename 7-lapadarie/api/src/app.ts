import express from "express";
import orderRoutes from "./routes/ordersRoutes";
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("", orderRoutes);

export default app;

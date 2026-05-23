import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
import { requireAuth } from "./middleware/auth.middleware.js";

dotenv.config();

const app = express();

/*
  MIDDLEWARE
*/
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(morgan("dev"));

/*
  AUTH ROUTES
*/
app.use("/api/auth", authRoutes);

/*
  PUBLIC ROUTE
*/
app.get("/", (req, res) => {
  res.json({
    message: "TaskFlow API running",
  });
});

/*
  PROTECTED TASKS ROUTE
*/
app.get(
  "/api/tasks",
  requireAuth,
  async (req, res) => {
    res.json({
      message: "Protected tasks route working",
      user: req.user,
    });
  }
);

/*
  PROTECTED DASHBOARD ROUTE
*/
app.get(
  "/api/dashboard",
  requireAuth,
  async (req, res) => {
    res.json({
      projects: 12,
      tasks: 37,
      members: 5,
      user: req.user,
    });
  }
);

/*
  PROTECTED PROFILE ROUTE
*/
app.get(
  "/api/profile",
  requireAuth,
  async (req, res) => {
    res.json({
      message: "Profile route working",
      user: req.user,
    });
  }
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import express from "express";

import protect from "../middleware/protect.js";

import {
  createProject,
  getProjects,
} from "../controllers/project.controller.js";

const router = express.Router();

router.post("/", protect, createProject);

router.get(
  "/:workspaceId",
  protect,
  getProjects
);

export default router;
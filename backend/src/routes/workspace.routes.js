import express from "express";

import protect from "../middleware/protect.js";

import {
  createWorkspace,
  getWorkspaces,
} from "../controllers/workspace.controller.js";

const router = express.Router();

router.post("/", protect, createWorkspace);

router.get("/", protect, getWorkspaces);

export default router;
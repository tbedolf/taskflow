import express from "express";

import protect from "../middleware/protect.js";

import {
  createTask,
  getTasks,
  updateTaskStatus,
} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", protect, createTask);

router.get(
  "/:projectId",
  protect,
  getTasks
);

router.put(
  "/:id/status",
  protect,
  updateTaskStatus
);

export default router;
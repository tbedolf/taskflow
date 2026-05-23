import prisma from "../lib/prisma.js";

export async function createTask(
  req,
  res
) {
  try {
    const {
      title,
      description,
      priority,
      projectId,
    } = req.body;

    const task =
      await prisma.task.create({
        data: {
          title,
          description,
          priority,
          projectId,
        },
      });

    res.status(201).json(task);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
}

export async function getTasks(
  req,
  res
) {
  try {
    const { projectId } = req.params;

    const tasks =
      await prisma.task.findMany({
        where: {
          projectId: Number(projectId),
        },

        orderBy: {
          createdAt: "desc",
        },
      });

    res.json(tasks);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
}

export async function updateTaskStatus(
  req,
  res
) {
  try {
    const { id } = req.params;

    const { status } = req.body;

    const task =
      await prisma.task.update({
        where: {
          id: Number(id),
        },

        data: {
          status,
        },
      });

    res.json(task);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
}
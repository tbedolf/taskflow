import prisma from "../lib/prisma.js";

export async function createProject(
  req,
  res
) {
  try {
    const {
      title,
      description,
      workspaceId,
    } = req.body;

    const project =
      await prisma.project.create({
        data: {
          title,
          description,
          workspaceId,
        },
      });

    res.status(201).json(project);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
}

export async function getProjects(
  req,
  res
) {
  try {
    const { workspaceId } = req.params;

    const projects =
      await prisma.project.findMany({
        where: {
          workspaceId: Number(workspaceId),
        },
      });

    res.json(projects);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
}
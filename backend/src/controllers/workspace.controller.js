import prisma from "../lib/prisma.js";

export async function createWorkspace(
  req,
  res
) {
  try {
    const { name } = req.body;

    const workspace =
      await prisma.workspace.create({
        data: {
          name,

          members: {
            create: {
              userId: req.user.id,
            },
          },
        },
      });

    res.status(201).json(workspace);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
}

export async function getWorkspaces(
  req,
  res
) {
  try {
    const workspaces =
      await prisma.workspace.findMany({
        where: {
          members: {
            some: {
              userId: req.user.id,
            },
          },
        },

        include: {
          members: true,
        },
      });

    res.json(workspaces);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
}
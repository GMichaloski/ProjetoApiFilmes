import { prisma } from "../helpers/utils.js";

export const getGender = async (req, reply) => {
  try {
    const gender = await prisma.gender.findMany();
    return reply.send({ data: { gender } });
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const create = async (req, reply) => {
  try {
    const { name } = req.body;
    const { gender } = await prisma.gender.create({
      data: {
        name,
      },
    });
    return reply.send(gender);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const update = async (req, reply) => {
  const { id } = req.params;
  let data = {};
  if (req.body.name) {
    data.name = req.body.name;
  }
  try {
    const gender = await prisma.gender.update({
      where: { id: Number(id) },
      data: data,
    });
    return reply.send(gender);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const remove = async (req, reply) => {
  const { id } = req.params;
  try {
    const gender = await prisma.gender.delete({
      where: {
        id: Number(id),
      },
    });
    return reply.send(gender);
  } catch (error) {
    console.error(error);
    reply.status(500).send(error);
  }
};

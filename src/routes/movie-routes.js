import * as MovieController from "../controllers/movie-controller.js";
import { validateRequest } from "../middlewares/auth.js";

export default {
  getAllMovies: {
    method: "GET",
    url: "/movies",
    handler: MovieController.index,
  },
  showMovie: {
    method: "GET",
    url: "/movies/:id",
    schema: {
      params: {
        type: "object",
        proprieties: {
          id: { type: "number" },
        },
      },
    },
    handler: MovieController.getMovie,
  },
  createMovie: {
    method: "POST",
    url: "/movies",
    schema: {
      header: {
        type: "object",
        properties: {
          Authorization: { type: "string" },
        },
        required: ["Authorization"],
      },
      body: {
        type: "object",
        properties: {
          title: { type: "string" },
          description: { type: "string" },
          gender_id: { type: "number" },
        },
        required: ["title", "description", "gender_id"],
      },
    },
    preHandler: [validateRequest],
    handler: MovieController.create,
  },

  updateMovie: {
    method: "PUT",
    url: "/movies/:id",
    schema: {
      header: {
        type: "object",
        properties: {
          Authorization: { type: "string" },
        },
        required: ["Authorization"],
      },
      params: {
        type: "object",
        properties: {
          id: { type: "number" },
        },
      },
      body: {
        type: "object",
        properties: {
          title: { type: "string" },
          description: { type: "string" },
          gender_id: { type: "number" },
        },
      },
    },
    preHandler: [validateRequest],
    handler: MovieController.update,
  },
  deleteMovie: {
    method: "DELETE",
    url: "/movies/:id",
    schema: {
      header: {
        type: "object",
        properties: {
          Authorization: { type: "string" },
        },
        required: ["Authorization"],
      },
      params: {
        type: "object",
        properties: {
          id: { type: "number" },
        },
      },
    },
    preHandler: [validateRequest],
    handler: MovieController.remove,
  },
};

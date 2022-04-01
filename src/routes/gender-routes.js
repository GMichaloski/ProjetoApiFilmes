import * as GenderController from "../controllers/gender-controller.js";
import { validateRequest } from "../middlewares/auth.js";

export default {
  getAllGenders: {
    method: "GET",
    url: "/genders",
    handler: GenderController.getGender,
  },
  createGender: {
    method: "POST",
    url: "/genders",
    preHandler: [validateRequest],
    handler: GenderController.create,
  },
  deleteGender: {
    method: "DELETE",
    url: "/genders/:id",
    preHandler: [validateRequest],
    handler: GenderController.remove,
  },
  updateGender: {
    method: "PUT",
    url: "/genders/:id",
    preHandler: [validateRequest],
    handler: GenderController.update,
  },
};

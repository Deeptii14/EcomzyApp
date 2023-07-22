import express from "express";
import {
  categoryController,
  createCategoryController,
  updateCategoryController,
  singleCategoryController,
  deleteCategorycontroller,
} from "../controllers/categoryContoller.js";
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";
const router = express.Router();
//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update Category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);
//get all category
router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", singleCategoryController);
//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategorycontroller
);
export default router;

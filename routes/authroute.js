import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getordersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
//route object

const router = express.Router();

//routing
//REGISTER ||METHOD POST
router.post("/register", registerController);
//forgot password
router.post("/forgot-password", forgotPasswordController);

//LOGIN || Post
router.post("/login", loginController);
//test routes
router.get("/test", requireSignIn, isAdmin, testController);
//protected  user route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// admin route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);
export default router;
//orders
router.get("/orders", requireSignIn, getordersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

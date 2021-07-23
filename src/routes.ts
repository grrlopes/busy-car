import { Router } from "express";
import { newcar } from "./usecases/admin/newCar";
import { removeCar } from "./usecases/admin/removecar";
import { listallcar } from "./usecases/listallCars";
import { newuser } from "./usecases/newUser";
import { login } from "./usecases/login";
import { removeuser } from "./usecases/removeUser";
import { rentcar } from "./usecases/rent/rentCar";
import { CheckAuth } from "./middleware/checkAuth";
// import {  } from "./usecases/rent/cancelRent";

const router = Router();

router.post("/newcar", CheckAuth, async (req, resp) => {
  const result = await newcar.createNewCar(req.body);
  return resp.status(201).json(result);
});

router.post("/removecar", CheckAuth, async (req, resp) => {
  const result = await removeCar.removeCars(req.body);
  return resp.status(200).json(result);
});

router.get("/listallcar", CheckAuth, async (req, resp) => {
  const result = await listallcar.listAllCars();
  return resp.status(200).json(result);
});

router.post("/newuser", CheckAuth, async (req, resp) => {
  const result = await newuser.createNewUser(req.body);
  return resp.status(201).json(result);
});

router.post("/removeuser", CheckAuth, async (req, resp) => {
  const result = await removeuser.removeUser(req.body);
  return resp.status(200).json(result);
});

router.post("/rentcar", CheckAuth, async (req, resp) => {
  const result = await rentcar.rentCar(req.body);
  return resp.status(200).json(result);
});

router.post("/login", async (req, resp) => {
  const result = await login.loginUp(req.body);
  return resp.status(200).json(result);
});

export { router };

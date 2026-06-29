import express from "express";
import { create, getAll, getById, remove, update } from "../controllers/product.controller.js";

const router = express.Router();


const products = [];

//crud products
router.get("/", getAll)

//get by id
router.get("/:id", getById);


router.post("/", create);

//update
router.put("/:id",update);

//delete
router.delete("/products/:id", remove);

export default router;

 
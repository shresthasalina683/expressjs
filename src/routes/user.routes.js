import express from "express";
import { create, getAll, getById, remove, update } from "../controllers/user.controller.js";

const router = express.Router();
//const users = [];




//crud users
//get all users
//get /users -> user page
//route param (:id)
router.get("/", getAll);

//get by id
//users/100 => {id:100}
// /posts/:userId/:postId => /posts/1/2 => {postId:2,userId}

router.get("/:id", getById); 

//create
router.post("/", create);

//update
router.put("/:id", update);

//delete
router.delete("/:id", remove);

export default router;
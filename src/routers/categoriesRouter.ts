import express from "express";

import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategoryById,
} from "../controllers/categories";
import verifyJWT from "../middlewares/verifyJWT";
import adminCheck from "../middlewares/adminCheck";

const router = express.Router();

// GET ALL CATEGORIES
router.get("/", getAllCategories);

// GET CATEGORY BY ID
router.get("/:categoryId", getCategoryById);

// CREATE A CATEGORY
router.post("/", verifyJWT, adminCheck, createCategory);
// router.post("/", createCategory);

// UPDATE A CATEGORY
router.put("/:categoryId", verifyJWT, adminCheck, updateCategory);
// router.put("/:categoryId", updateCategory);

// DELETE A CATEGORY
router.delete("/:categoryId", verifyJWT, adminCheck, deleteCategoryById);
// router.delete("/:categoryId", deleteCategoryById);

export default router;

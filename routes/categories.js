import express from "express";
import { categories } from "../data/categories.js";

const router = express.Router();

router.get("/", (request, response) => {
  response.json({
    success: true,
    count: categories.length,
    categories,
  });
});

export default router;

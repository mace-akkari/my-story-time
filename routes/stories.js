import express from "express";
import { footballFields } from "../data/stories/football.js";

const router = express.Router();

const stories = {
  football: {
    id: "football",
    title: "Football Hero",
    fields: footballFields,
  },
};

router.get("/:storyId", (req, res) => {
  const { storyId } = req.params;
  const story = stories[storyId];

  if (!story) {
    return res.status(404).json({
      success: false,
      message: "Story not found.",
    });
  }

  return res.json({
    success: true,
    story,
  });
});

export default router;

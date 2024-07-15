import { Router } from "express";
import { getUnsubscribeMovies } from "../BLL/subscriptionsBLL.js";

const router = Router();

router.get("/:id/unsubscribe", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getUnsubscribeMovies(id);
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;

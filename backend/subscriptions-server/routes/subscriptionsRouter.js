import { Router } from "express";
import {
  getUnsubscribeMovies,
  createSubscription,
  updateSubcription,
} from "../BLL/subscriptionsBLL.js";

const router = Router();

router.get("/:id/unsubscribe", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getUnsubscribeMovies(id);
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Error occured!" });
  }
});

router.post("/", async (req, res) => {
  const subscription = req.body;
  try {
    const result = await createSubscription(subscription);
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Error occured!" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const subscription = req.body;
  try {
    const result = await updateSubcription(id, subscription);
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Error occured!" });
  }
});

export default router;

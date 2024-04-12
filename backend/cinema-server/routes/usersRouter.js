import { Router } from "express";
import { createUser } from "../BLL/usersBLL.js";

const router = Router();

router.post("/", async (req, res) => {
  const user = req.body;
  try {
    const result = await createUser(user);
    res.status(201).json({ message: result });
  } catch (err) {
    if (err.message === "User already exists") {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;

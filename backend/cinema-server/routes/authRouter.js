import { authentication, registeration } from "../BLL/authBLL.js";
import { Router } from "express";

const router = Router();

router.get("/login", async (req, res) => {
  const { email, password } = req.query;
  try {
    const token = await authentication(email, password);
    res.status(200).json({ message: token });
  } catch (err) {
    if (err.message === "User does not exist" || err.message === "Wrong password") {
      res.status(401).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
});

router.put("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    await registeration(email, password);
    res.status(200).json({ message: "The registration was successful" });
  } catch (err) {
    if (err.message === "User does not exist") {
      res.status(401).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
});

export default router;

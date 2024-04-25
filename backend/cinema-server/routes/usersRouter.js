import { Router } from "express";
import { getUsers, createUser, deleteUser } from "../BLL/usersBLL.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await getUsers();
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

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

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteUser(id);
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;

import { Router } from "express";
import {
  getMembers,
  getMember,
  createMember,
  updateMember,
} from "../BLL/membersBLL.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await getMembers();
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getMember(id);
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const member = req.body;
    const result = await createMember(member);
    res.status(201).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const member = req.body;
  try {
    const result = await updateMember(id, member);
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;

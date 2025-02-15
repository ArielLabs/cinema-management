import { Router } from "express";
import {
  getMembers,
  getMember,
  createMember,
  updateMember,
  deleteMember,
} from "../BLL/membersBLL.js";
import { deleteSubscription } from "../BLL/subscriptionsBLL.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await getMembers();
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Error occured!" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getMember(id);
    if (!result) {
      return res.status(404).json({ message: "The member was not found" });
    }
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Error occured!" });
  }
});

router.post("/", async (req, res) => {
  const member = req.body;
  try {
    const result = await createMember(member);
    res.status(201).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Error occured!" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const member = req.body;
  try {
    const result = await updateMember(id, member);
    if (!result) {
      return res.status(404).json({ message: "The member was not found" });
    }
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Error occured!" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [resultMember, resultSubscription] = await Promise.all([
      deleteMember(id),
      deleteSubscription(id),
    ]);
    if (!resultMember || !resultSubscription.acknowledged) {
      return res.status(404).json({ message: "The member was not found" });
    }
    res.status(200).json({ message: "Deleted!" });
  } catch (err) {
    res.status(500).json({ message: "Error occured!" });
  }
});

export default router;

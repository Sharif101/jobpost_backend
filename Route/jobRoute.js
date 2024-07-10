const express = require("express");
const {
  addJob,
  getalljob,
  deletejob,
  updatejob,
} = require("../Controllers/jobController");

const router = express.Router();

router.post("/jobpost", addJob); // https://jobbackend-pi.vercel.app/jobpost
router.get("/alljob/:category", getalljob); // https://jobbackend-pi.vercel.app/alljob/Management
router.delete("/deletejob/:id", deletejob); // https://jobbackend-pi.vercel.app/deletejob/668ea632db191a066059b83a
router.patch("/updatejob/:id", updatejob); // https://jobbackend-pi.vercel.app/updatejob/668ea627db191a066059b837

module.exports = router;

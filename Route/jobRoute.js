const express = require("express");
const {
  addJob,
  getalljob,
  deletejob,
  updatejob,
} = require("../Controllers/jobController");

const router = express.Router();

router.post("/jobpost", addJob); // http://localhost:5000/jobpost
router.get("/alljob", getalljob); // http://localhost:5000/alljob
router.delete("/deletejob/:id", deletejob); // http://localhost:5000/deletejob/668ea632db191a066059b83a
router.patch("/updatejob/:id", updatejob); // http://localhost:5000/updatejob/668ea627db191a066059b837

module.exports = router;

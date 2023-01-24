const express = require("express");
const taskcontrolleur = require("../controllers/taskcontrolleur");

const router = express.Router();
router.post("/",taskcontrolleur.AddTask);
router.delete("/:id",taskcontrolleur.deleteTask);
router.put("/:id",taskcontrolleur.updateTask);



module.exports = router;
const router = require("express").Router(),
  { createForm, uploadXray } = require("../../controllers/tasks");

router.post("/", createForm);
router.post("/xray", uploadXray);

module.exports = router;

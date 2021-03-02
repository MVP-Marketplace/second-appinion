const router = require("express").Router(),
  { createForm, uploadXray } = require("../../controllers/forms");

router.post("/", createForm);
router.post("/upload", uploadXray);

module.exports = router;

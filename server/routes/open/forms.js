const router = require("express").Router(),
  { createForm, uploadXray, getAllForms } = require("../../controllers/forms");

router.post("/", createForm, uploadXray);
// router.post("/upload", uploadXray);
router.get("/", getAllForms);

module.exports = router;

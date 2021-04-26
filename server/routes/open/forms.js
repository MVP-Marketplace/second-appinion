const router = require("express").Router(),
  {
    createForm,
    uploadXray,
    getAllForms,
    getSearchForms,
  } = require("../../controllers/forms");

router.post("/", createForm);
// router.post("/upload", uploadXray);
router.get("/", getAllForms);
router.get("/search", getSearchForms);

module.exports = router;

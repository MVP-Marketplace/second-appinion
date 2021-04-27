const router = require("express").Router(),
  {
    createForm,
    uploadXray,
    getAllForms,
    getSearchForms,
    getSpecificForm,
    updateCurrentForm,
  } = require("../../controllers/forms");

router.post("/", createForm);
// router.post("/upload", uploadXray);
router.get("/", getAllForms);
router.get("/search", getSearchForms);
router.get("/:id", getSpecificForm);
router.get("/:id", updateCurrentForm);

module.exports = router;

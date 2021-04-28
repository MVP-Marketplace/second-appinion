const router = require("express").Router(),
  {
    getAllForms,
    getSearchForms,
    getSpecificForm,
    updateCurrentForm,
    deleteForm,
  } = require("../../controllers/forms");

// router.get("/:id", getSpecificForm);
router.get("/", getAllForms);
router.get("/search", getSearchForms);
router.get("/:id", getSpecificForm);
router.get("/:id", updateCurrentForm);
router.delete("/:id", deleteForm);

module.exports = router;

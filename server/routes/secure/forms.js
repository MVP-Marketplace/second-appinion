const router = require("express").Router(),
  {
    getSpecificForm,
    getAllForms,
    deleteForm,
  } = require("../../controllers/forms");

router.get("/:id", getSpecificForm);

router.get("/", getAllForms);

router.delete("/:id", deleteForm);

module.exports = router;

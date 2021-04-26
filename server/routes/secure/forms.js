const router = require("express").Router(),
  {
    getSpecificForm,
    getAllForms,
    deleteForm,
  } = require("../../controllers/forms");
isAdmin = require("../../middleware/authorization/index");

router.get("/:id", getSpecificForm);

router.delete("/:id", isAdmin(), deleteForm);

module.exports = router;

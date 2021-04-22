const router = require("express").Router(),
  {
    getSpecificForm,
    getAllForms,
    deleteForm,
  } = require("../../controllers/forms");
isAdmin = require("../../middleware/authorization/index");

router.get("/:id", getSpecificForm);

router.get("/", getAllForms);

router.delete("/:id", deleteForm);

module.exports = router;

const router = require('express').Router(),
  {
    createForm,
    getSpecificForm,
    getAllForms,
  } = require('../../controllers/tasks');

router.post('/', createForm);

router.get('/:id', getSpecificForm);

router.get('/', getAllForms);


module.exports = router;
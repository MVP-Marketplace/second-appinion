const router = require('express').Router(),
  {
    getSpecificForm,
    getAllForms,
    deleteForm
  } = require('../../controllers/tasks');

  router.get('/:id', getSpecificForm);

  router.get('/', getAllForms);
  
  router.delete('/:id', deleteForm);

router.post('/', );


module.exports = router;
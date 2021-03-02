const router = require('express').Router(),
  {
    createForm
  } = require('../../controllers/tasks');

router.post('/', createForm);


module.exports = router;
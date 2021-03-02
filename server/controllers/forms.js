const mongoosse = require('mongoose'),
    Form = require('../db/models/form');

// ***********************************************//
// Create form
// ***********************************************//
exports.createForm = async (req, res) => {
    const form = await new Form({
      ...req.body,
      email: req.form.email
    });
    try {
      form.save();
      res.status(201).json(form);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  };

  // ***********************************************//
// Get specific form
// ***********************************************//
exports.getSpecificForm = async (req, res) => {
    const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(400).send('Not a valid form id');
  
    try {
      const form = await Form.findOne({ _id, email: req.form.email });
      if (!form) return res.status(404).send();
      res.json(form);
    } catch (e) {
      res.status(500).json({ error: e.toString() });
    }
  };

  // ***********************************************//
// Get all forms
// /forms?completed=true
// /forms?limit=10&skip=10
// /forms?sortBy=createdAt:asc
// /forms?sortBy=dueDate:desc
// ***********************************************//
exports.getAllForms = async (req, res) => {
    const match = {},
      sort = {};
  
    if (req.query.completed) match.completed = req.query.completed === 'true';
  
    if (req.query.sortBy) {
      const parts = req.query.sortBy.split(':');
      sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
    }
    try {
      await req.user
        .populate({
          path: 'forms',
          match,
          options: {
            limit: parseInt(req.query.limit),
            skip: parseInt(req.query.skip),
            sort
          }
        })
        .execPopulate();
      res.json(req.forms);
    } catch (e) {
      res.status(500).json({ error: e.toString() });
    }
  };


// ***********************************************//
// Delete form
// ***********************************************//
exports.deleteForm = async (req, res) => {
    try {
      const form = await Task.findOneAndDelete({
        _id: req.params.id,
        email: req.form.email
      });
      if (!form) return res.status(404).json({ error: 'Form not found' });
      res.json({message: 'Form has been deleted.'});
    } catch (e) {
      res.status(500).json({ error: e.toString() }); 
    }
  };
const express = require('express');
const router = express.Router();

const Widget = require('../models/widget.model');

router.post("/create-widget", (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const api = req.body.api;
    const structure = req.body.structure;

    const newWidget = new Widget({
        name,
        description,
        api,
        structure
    });
    console.log(newWidget)
    newWidget.save()
        .then(() => res.json("Widget added!"))
        .catch(err => res.status(400).json('Error ' + err));
  });

  module.exports = router;
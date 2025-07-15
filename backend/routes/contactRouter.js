const express = require('express');
const contactRoute = express.Router();
const contactController = require('../controller/contactController');
const validateContact = require('../middleware/validateContact');

contactRoute.get('/getContact',contactController.getContact);
contactRoute.post('/contactUs',validateContact,contactController.postContact);

module.exports = contactRoute;
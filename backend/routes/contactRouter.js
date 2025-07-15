const express = require('express');
const contactRoute = express.Router();
const contactController = require('../controller/contactController');
const validateContact = require('../middleware/validateContact');

contactRoute.post('/contactUs',validateContact,contactController.contact);
contactRoute.get('/getContact',contactController.getContact);

module.exports = contactRoute;
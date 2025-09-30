import express from 'express';
const contactRoute = express.Router();
import { getContact , postContact }  from '../controller/contactController.js';
import { validateContact } from '../middleware/validateContact.js';

contactRoute.get('/contactUs',getContact);
contactRoute.post('/contactUs',validateContact,postContact);

export default contactRoute;
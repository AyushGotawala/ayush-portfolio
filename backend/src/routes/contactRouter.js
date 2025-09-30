import express from 'express'
import { getContact , postContact } from '../controller/contactController.js';
import { validateContact } from '../middleware/validateContact.js';
const contactRoute = express.Router();

contactRoute.get('/getContact',getContact);
contactRoute.post('/contactUs',validateContact,postContact);

export default contactRoute;
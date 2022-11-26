const express = require('express')
const contactRouter = express.Router()
const { getContacts, getContactByID, postContact,  updateContactByID, deleteContactByID, login} = require('../controllers/contact')


const { authMiddleware } = require('../middleware/auth')


//Add contact route
contactRouter.post('/', postContact)

//login for authentication
contactRouter.post('/login',login)

//Find a contact on the basis of ID
contactRouter.get('/:id' ,getContactByID)

//Find all contact
contactRouter.get('/',getContacts)


// This is for authentication
contactRouter.use(authMiddleware)

//Update info of the contact
contactRouter.put('/:id' , updateContactByID) 

//Delete the info of the contact on the basis of id
contactRouter.delete('/:id' , deleteContactByID )


//Exporting the router module
module.exports = contactRouter
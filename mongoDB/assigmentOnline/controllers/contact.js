const contactModel = require('../models/contact')

const getContacts = async (req, res) => {
// check authrization here            
  try {
    const contact = await contactModel.find();
    res.send({ status: 'success', contact })
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'error fetching contact' })
  }
}


const getContactByID = async (req, res) => {
  const { id } = req.params

  try  {
    const contact = await contactModel.findById(id)
  if (contact) {
    res.send(contact)
  } else {
    res.status(404).send({ status: 'error', msg: 'Not found' })
  }
}
  catch(error){
    res.status(404).send({ status: 'error', msg: 'Not found' })
  }
}




const postContact = async (req, res) => {
  const ContactData = req.body
  try {
    const result = await contactModel.create(ContactData)
    res.status(200).send(result)
  } catch (err) {
    console.log(err)
    res.status(500).send("There is some error plz try agian")
  }

}


const updateContactByID = async (req, res) => {

  const { id } = req.params
  const updateData = req.body //{name, id}

  try {
    const updatedResult = await contactModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true })
    res.send(updatedResult)
  } catch (err) {
    console.log(err)
    res.status(500).send("There is some error plz try agian")
  }
}


const deleteContactByID = async (req, res) => {
  const { id } = req.params

  try
  {
    const deletedData = await contactModel.findByIdAndDelete(id)
  res.send(deletedData)
}
catch (err) {
  console.log(err)
  res.status(500).send("There is some problem please try again")
}
}

const login = async (req,res)=>{
  const { email , password } = req.body
  try{
      const user = await contactModel.findOne({email,password})
      if(!user){
          res.status(401).send({status: 'error', msg: 'not found'})
      }
      // user is verified
      const userPayload = { email }
      const token = jwt.sign(userPayload,process.env.AUTH_SECRET_KEY, { algorithm: 'HS384', expiresIn: '1d' })
      res.cookie('jwt',token,{maxAge: 900000})
      res.send('Login Successfully')
     
      // res.send({status: 'success' , user})
  }catch(err){
      res.status(401).send({ status: 'error', msg: err })
  }
}


module.exports = {
  getContacts,
  getContactByID,
  postContact,
  updateContactByID,
  deleteContactByID,
  login
}
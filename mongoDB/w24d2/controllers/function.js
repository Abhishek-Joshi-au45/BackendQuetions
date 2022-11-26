const { initDB } = require ('../dbConfiq')

const { ObjectId } = require('mongodb')

let movieCollection;

//IIFE
(async function () {
  movieCollection = await initDB('Users')
})();


// async function getMovieCollection() {
//   movieCollection = await initDB()
// }
// getMovieCollection()


const getUsers = async (req, res) => {

  // const { language, name } = req.query //english

  const Users = await movieCollection.find().toArray()
  console.log(Users)
  res.send({ status: 'success', Users : Users })
}

const getUsersByID = async (req, res) => {
  const { userID } = req.params

  const user = await movieCollection.findOne({ _id: new ObjectId(userID) })
  res.send({ status: 'success', user : user })
}

const postUser = async (req, res) => {
  const userData = req.body

  //validation
  try {
    const response = await movieCollection.insertOne(userData)
    console.log(response)
    if (response.acknowledged) {
      res.status(201).send({ status: 'success' })
    } else {
      res.status(500).send({ status: 'error', msg: 'Cannot Post' })
    }
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'Cannot Post' })
  }

}

const updateUserById = async (req, res) => {

  const { userID } = req.params
  const updatedUserData = req.body //{language, name, id}
  try {
    await movieCollection.updateOne({ _id: new ObjectId(userID) }, { $set: updatedUserData })
    res.send({ status: 'Updated Successfully' })
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'Cannot Update Movie' })
  }

}

const deleteUserByID = async (req, res) => {
  const { userID } = req.params
  try {
    await movieCollection.deleteOne({ _id: new ObjectId(userID) })
    res.send({ status: 'Deleted Successfully' })
  } catch (err) {
    res.status(500).send({ status: 'Cannot delete movie due to internal error' })
  }
}

module.exports = {
  getUsers,
  getUsersByID,
  postUser,
  updateUserById,
  deleteUserByID
}
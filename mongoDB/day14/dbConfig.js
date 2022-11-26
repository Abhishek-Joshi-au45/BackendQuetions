const { MongoClient ,ServerApiVersion } = require('mongodb')

const uri = "mongodb+srv://abhishekjoshi2030:Joshi%40123@cluster0.lhoxah5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const dbName = 'TicketNew'

let collection = null

async function initDB(collectionName) {
  await client.connect()
  console.log('Connected successfully to server');

  const db = client.db(dbName) //dbName
  return db.collection(collectionName) //collectionName
}

module.exports = {
  initDB: initDB
}
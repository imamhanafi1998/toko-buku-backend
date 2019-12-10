// const {MongoClient, ObjectID} = require("mongodb")
const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "toko-buku"
MongoClient.connect(connectionURL,
  {useNewUrlParser: true},
  (error, client) => {
    if (error) {
      return console.log("unable to connect")
    }
    // const db = client.db(databaseName)
    // db.collection('tes').insertOne({
    //   nama: "Imam Hanafi",
    //   umur: 21
    // })
  }
)

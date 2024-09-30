const express = require("express");
const bodyParser = require("body-parser");



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var dbName="mydb";
/**
 * 
 * function to check for database present or not
 */
function isPresentDb(){
 // MongoClient mongoClient = new MongoClient();
}


/**
 * 
 * Create db in mongobd
 * 
 */
/*MongoClient.connect(url+"dbTest", function(err, db) {
  if (err) throw err;
  
  //db.getMongo().getDBNames().indexOf("mydb");
   //var dbo = db.db("mydb");
  //if(dbo.collections.name)
  var dab= db.db("dbTest")
   console.log(db.databaseName);
  //else 
 //console.log("database not present");
  db.close();
});
*/
/**
 * 
 * Create Collection in mongodb
 * 
 */
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(dbName);
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });

  dbo.listCollections().toArray(function(err, collInfos) {
    // collInfos is an array of collection info objects that look like:
    // { name: 'test', options: {} }
    console.log(collInfos);
  
});
  
 /* dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });*/
});


/**
 * 
 * Insert data to mongobd
 * 
 */
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
   // console.log(res);
   db.close();
  });
});
*/


/**
 * 
 * get value mongodb
 * 
 */

 //for one result
/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});*/

//For all result
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/


//for some result
/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result[2].name);
    db.close();
  });
});*/

//for a query with some parameters

/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: 'One way 98' };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});*/

//for a query with one Mathching value in the string

/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: /^S/ };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});*/

//FOR SORTING DECENDING ORDER
/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var mysort = { name: -1 };
  dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});*/

//FOR DELETING FROM MONGODB
/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: 'Mountain 21' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});*/

//DELETE MANY FROM MONGODB
/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: /^O/ };
  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});
*/

//DELETE COLLECTION FROM MONGODB 
// ---- tYPE 1 -----
/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});

// ----- TYPE 2 -----
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.dropCollection("customers", function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});*/

//  UPDATE COLLECTION FOR ONE ROW
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: "Valley 345" };
  var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
*/

// UPDATE FOR A SPECIFIC COLUMN IN A ROW
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: "Valley 345" };
  var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
*/

//UPDATE TABLE FOR MAY TABLE
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: /^S/ };
  var newvalues = {$set: {name: "Minnie"} };
  dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});
*/

//LIMIT A OUTPUT IN MONGODB
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find().limit(5).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/

//JOIN SIMILAR COLLECTION IN MONGOBD
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});
*/


/**
 * 
 * This code is for MySql connect database
 * 
 */
/*const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "opel_db"
});

try {
  connection.connect();
} catch (e) {
  console.log("SQL conection failed");
  console.log(e);
}*/

const api = express();

api.use(express.static(__dirname + "/public"));
api.use(bodyParser.json());


api.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
      return res.send(10);
  } else {
      return next();
  }
});

api.listen(80, () => {
  console.log("API started");
});

var count=0;


api.get("/project", (req, res) => {
  /**
   * 
   * database connection to get items from mongodb
   * 
   */

  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}).toArray(function(err, result) {
      if (err) throw err;
      count=count+1;
      console.log("get function called "+count);
      res.json(result);
     // console.log(res)
      db.close();
    });
  });





   
        /**
         * 
         * if connection is successful on My sql
         * 
         * */
      /*  connection.query("SELECT * FROM project", function (err, result, fields) {
          // if any error while executing above query, throw error
          if (err) throw err;
          // if there is no error, you have the result
          // iterate for all the rows in result
          res.json(result);
          console.log(result);
        });*/
      });

  api.post("/project/add", (req, res) => {
    /**
     * 
     * Database send to mongodb
     * 
     */






    /**
     * 
     * connection for Mysql to send data
     * 
     */
    /*
    connection.query(
      "INSERT INTO project (description) VALUES (?)",
      [req.body.item],
      (error, results) => {
        if (error) return res.json({ error: error });

        connection.query(
          "SELECT LAST_INSERT_ID() FROM project",
          (error, results) => {
            if (error) return res.json({ error: error });

            res.json({
              id: results[0]["LAST_INSERT_ID()"],
              description: req.body.item
            });
          }
        );
      }
    );*/
  });



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/my-db";


var appRouter = function (app) {

  app.get("/users", function (req, res) {

    MongoClient.connect(url, { useNewUrlParser: true },function(err, db){
      var dbo = db.db("my-db");
      
     

      usersDB = dbo.collection("users").findOne(function(err, dane){
        res.status(200).send(dane);  
      });
      
    db.close();
  
  }); 
    
  });

 app.get("/users/:num", function (req, res) {
 
   var num = req.params.num;
  

   if (isFinite(num) && num  > 0 && num < 100) {
    
    var suma =  parseInt(num);

     res.status(200).send("Your number: "+suma);
    

   } else {
     res.status(400).send({ message: 'invalid number supplied' });
   }

 });
}

module.exports = appRouter;
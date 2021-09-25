const express = require("express");
var cors = require('cors')


var app = express() 
app.use(cors()) 

app.use(express.urlencoded({extended: true}));
app.use(express.json())

const PORT = process.env.PORT || 3001;

app.get("/", (req, res,next) => {
 
  res.json({ message: "Hello from  get server!" });

});

app.options('/')
app.post("/",(req, res,next) => {
  var return_data=req.body;  
  res.send(return_data);
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


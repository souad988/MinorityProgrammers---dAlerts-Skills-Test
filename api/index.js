const express = require("express");
var cors = require('cors')
var app = express()
 
app.use(cors())
 
const PORT = process.env.PORT || 3001;

app.get("/",cors(), (req, res,next) => {
 
  res.json({ message: "Hello from  get server!" });

});

app.options('/', cors())
app.post("/",cors(),(req, res,next) => {
  console.log(`from the backend  ${req.data}`);
  res.json(req.data);
  next();
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


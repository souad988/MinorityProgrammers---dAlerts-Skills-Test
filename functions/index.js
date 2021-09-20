const functions = require("firebase-functions");
const express =require("express");

const app=express();
/*
const PORT=process.env.PORT || 3001;
*/
app.get("/", (req, res) =>{
  res.status(200).send({data: "connected"});
});

exports.app=functions.https.onRequest(app);


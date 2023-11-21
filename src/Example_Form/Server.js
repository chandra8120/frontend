const mongoose = require("mongoose");
const express = require("express");
const app = express();
const data = require('./Model');
app.use(express.json());                  //middle vare using express js

const cors = require("cors");
// ...
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h2>hello chandra</h2>");
});

mongoose
  .connect(
    "mongodb+srv://chandra_8120:chandra@cluster0.k6nq4jt.mongodb.net/yourDatabaseName?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB connected..."))
  .catch((error) => console.log("error displayed", error));

app.post("/data", async (req, res) => {
  
  try {
    const {name,username,email}  = req.body;
    console.log(req.body,"namee");

    const exist = await data.findOne({name});

    if(exist){
    return res.status(400).send('user already reg')
    }
    const newUser=new data({
      name,username,email
    })
    newUser.save()
    return res.status(200).send("user data successfully added !!!")

  }
  catch(err){
  console.log(err,'display error message..')
  }
  
})

app.listen(3501, () => console.log("server running...."))

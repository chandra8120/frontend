const mongoose = require("mongoose");
const express = require("express");
const app = express();
const data = require('./Model'); // Make sure to import your data model
const bcrypt = require('bcrypt');
const cors = require("cors");
const serverless = require('serverless-http');
const router = express.Router();

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

router.get("/", (req, res) => {
  res.send("<h2>hello chandra</h2>");
});

try {
  mongoose.connect("mongodb+srv://yourUsername:yourPassword@cluster0.k6nq4jt.mongodb.net/yourDatabaseName?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  useCreateIndex: true,
  });
  console.log("DB connected...");
} catch (error) {
  console.log("Error connecting to the database:", error);
}

router.post("/data", async (req, res) => {
  try {
    const { name, username, email } = req.body;
    console.log(req.body, "name");

    const exist = await data.findOne({ name });

    if (exist) {
      return res.status(400).send('user already reg');
    }
    const newUser = new data({
      name, username, email
    });
    await newUser.save();
    return res.status(200).send("user data successfully added !!!");
  } catch (err) {
    console.log(err, 'display error message..');
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ... Your other routes ...

// Use the router for Netlify function
app.use('/.netlify/functions/api', router);

// Export the Netlify function handler
module.exports.handler = serverless(app);

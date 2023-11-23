const mongoose = require("mongoose");
const express = require("express");
const app = express();
const data = require('./Model');
const bcrypt = require('bcrypt');
const cors = require("cors");
app.use(express.json());                  //middle vare using express js



app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions))



app.get("/", (req, res) => {
  res.send("<h2>hello chandra</h2>");
});

mongoose
  .connect("mongodb+srv://chandra_8120:chandra@cluster0.k6nq4jt.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("DB connected..."))
  .catch((error) => console.log("error displayed", error));


app.post("/data", async (req, res) => {
  
  try {
    const {name,username,email}  = req.body;
    console.log(req.body,"name");

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


//...
app.get('/getalldata', async (req, res) => {
  try {
    const allData = await data.find();
    res.json(allData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//...
app.delete('/delete/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await data.deleteOne({ _id: userId });

    if (deletedUser.deletedCount === 1) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// login authentication ....................................................................
const User = mongoose.model('User', new mongoose.Schema({
  
  username: String,
  password: String,

}));

app.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.listen(3200, () => console.log("server running...."))


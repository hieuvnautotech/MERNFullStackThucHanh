import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import posts from './routers/posts.js'
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;
const URI =
  "mongodb+srv://hieuvnautotech:211899900So@mern-learnit.ygpexhl.mongodb.net/MERNFullStack?retryWrites=true&w=majority";
 

app.use(bodyParser.json({limit:'30mb'}));
app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

// app.get('/', (req, res) => { res.send("welcome") });
app.use("/posts", posts);

//kết nối db
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { 
    console.log("Connected to Mongoose server");
  }).catch(err => { console.log('err', err) })

app.listen(PORT, () => { 
  console.log(`listening on port + ${PORT}`);
});
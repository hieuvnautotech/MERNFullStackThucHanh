import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import posts from './routers/posts.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({limit:'30mb'}));
app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

// app.get('/', (req, res) => { res.send("welcome") });
app.use("/posts", posts);

app.listen(PORT, () => { 
  console.log(`listening on port + ${PORT}`);
});
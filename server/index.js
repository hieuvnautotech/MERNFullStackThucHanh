import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 5000;
const URI = 'mongodb+srv://hieuvnautotech:211899900So@mern-learnit.ygpexhl.mongodb.net/MERNFullStack?retryWrites=true&w=majority'
app.use(bodyParser.json({limit:'30mb'}));
app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

app.get('/', (req, res) => {
    res.send('Welcome')
});

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

const express = require("express");
const app = express();


// connect to MongoDB
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dev_db_url = "mongodb+srv://John:monkey123@cluster0.s0nmj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = process.env.MONGODB_URL || dev_db_url;
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("connected");
}

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json())

// set up router
const indexRouter = require("./routers/indexRouter");
app.use('/', indexRouter);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})
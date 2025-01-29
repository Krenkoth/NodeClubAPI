const userArgs = process.argv.slice(2);
const user = require("./models/user");
const User = require("./models/user");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
  
const mongoDB = userArgs[0];
  
main().catch((err) => console.log(err));
  
async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await pop();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}





async function pop() {
    const user = new User({
        username: "Krenkoth",
        email: "john.g.skelton21@gmail.com",
    });
    await user.save();
    
    console.log("populated User");
    const tests = await User.find().exec();
    console.log(tests);
}

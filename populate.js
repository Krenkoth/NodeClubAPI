const userArgs = process.argv.slice(2);
const Test = require("./models/testing");
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
    const test1 = new Test({
        name: "Joe", monkey: "Howler", num: 42,
    });
    const test2 = new Test({
        name: "Monkey", monkey:"Ape", num: 3,
    });
    await Promise.all([
        test1.save(),
        test2.save(),
    ]);
    
    console.log("populated Joe and Monkey");
    const tests = await Test.find().sort({name: 1}).exec();
    console.log(tests);
}

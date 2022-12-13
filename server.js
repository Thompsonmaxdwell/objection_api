const setupDb = require("./db/setupDb");
const express = require("express");
const route = require("./routes");
const bodyParser = require("body-parser");


setupDb()

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(route);




app.listen(9000, ()=>{
    console.log("Server listening on port 9000");
})
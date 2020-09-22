// requrie all of the modules we need 
const express = require("express");
const cors = require("cors");

// so that we can have our environment variable in dotenv file
require('dotenv').config();

// create our express server
const app = express();
// the port we will be on
const port = process.env.PORT || 8080;

// cors middleware
app.use(cors());
// allows us to parse json
app.use(express.json());

// once connection is made we can start the server on the port.
app.listen(port, () => {
    console.log(`Server is running on port:  ${port}`);
});

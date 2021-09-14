const express = require("express");
// app will give us back the app to configure however we want
const app = express();

//app will be listening for a get request on "/" aka the root route 
    // then we handle this function
app.get("/", (req, res) => { 
    res.send("Hello World!");
});

// tell the app object ot listen to a given port 
// process environment variable, and listen on PORT or 5000
const port = process.env.PORT || 5000;


// tell app to listen on port, then callback function to print to make sure it is working
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
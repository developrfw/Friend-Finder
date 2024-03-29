//require package
const express = require('express');

const app = express();


var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({extended:true}));
app.use(express.json());


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.use(express.static("public"));

app.listen(PORT, function(){
    console.log('App listening on port: ' + PORT);
});
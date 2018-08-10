const express = require('express');
const bodyParser = require('body-parser');

const app = express();

require('./routes/api_routes')(app);

app.use(express.static(__dirname + '/public/images'));

app.listen(3000,()=>{
    console.log('server listening on 3000');
});
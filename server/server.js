let express = require('express');


let app = express();
const PORT = 5000;

// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));



app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`);
});
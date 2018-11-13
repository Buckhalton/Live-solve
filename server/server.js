let express = require('express');


let app = express();
const PORT = 5000;


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));


app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`);
});
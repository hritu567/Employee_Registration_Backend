
const express = require('express')
const routes = require("./routes/routes");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/api',routes)
app.listen(3000, ()=>{
    console.log("server has started");
    require("./configuration/db.connection");
})


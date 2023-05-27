const express = require("express");
const router = require("./src/routes/routes");
const { PORT } = require("./src/middleware/config");
require('./src/database/db.js')



const app = express();
const port = PORT || 3000;


/**Middlewares */
app.use(express.json());
app.disable("x-powered-by"); // less hackers know about our stack
app.use((req,res,next)=>{
    res.header('Content-Type: application/json');
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PATCH, POST, DELETE, OPTIONS');
    next();
});


/**api routes */
app.use('/api', router);

app.get('/', function (req, res) {
    res.send('Hello World!');
});


/**start server only when we hace valid connection */
app.listen(port, () => {
    console.log(`Server on port ${port}`)
})

module.exports = app;
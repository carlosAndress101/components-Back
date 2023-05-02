import express from "express";
import router from './routes/routes.js'
import morgan from "morgan";
import { PORT } from './middleware/config.js'
import './database/db.js'

const app = express();
app.use(morgan('dev'));
const PORTT = process.env.PORT || 1500;


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


/**start server only when we hace valid connection */
app.listen(PORT, () => {
    console.log(`Server on port ${PORTT}`)
})

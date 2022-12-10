import express from 'express'
import Cors from 'cors'
import tinder_router  from  "./api/tinder_api.js";

//app config 
const app = express() 
const port = process.env.PORT || 8000

// middlewares
app.use(express.json()) ;
app.use(Cors())


// api config
app.use("/", tinder_router);


//listen
app.listen(port , () => console.log(`listening  http://127.0.0.1:${port}`))

// Export the Express API
export default app;
import express from 'express'
import mongoose from 'mongoose'

const router = express.Router();

import Cards from './tinder-db.js'


const pwd = 'vikash..123'
const username = 'vikash129'
const connection_url =  `mongodb+srv://${username}:${pwd}@cluster0.edycsdi.mongodb.net/?retryWrites=true&w=majority`


mongoose.set('strictQuery', true);

//DB config
mongoose.connect(connection_url , { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    //  serverApi: ServerApiVersion.v1 
    })



    // api config
router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data has successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});





//api endpoints
router.post('/tinder/cards' , (req , res) => {
    const dbCard = req.body ;
    console.log(dbCard)

    Cards.create( dbCard , (err , data) => {
        if(err){
            res.status(500).send( err) ;
        }
        else{
            res.status(201).send(data) ;
        }
    })
    console.log('post tinder/card')
} 
)



router.get('/tinder/cards' , (req , res) => {

    Cards.find( (err , data) => {
        if(err){
            res.status(500).send( err) ;
        }
        else{
            res.status(200).send(data) ;
        }
    })
    console.log('get tinder/card')

} )





export default router;

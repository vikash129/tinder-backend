import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'

import Cards from './tinder-db.js'
//app config 
const app = express() 
const port = process.env.PORT || 8000

const pwd = 'vikash..123'
const username = 'vikash129'
const connection_url =  `mongodb+srv://${username}:${pwd}@cluster0.edycsdi.mongodb.net/?retryWrites=true&w=majority`


mongoose.set('strictQuery', true);

// middlewares
app.use(express.json()) ;
app.use(Cors())

// DB config
mongoose.connect(connection_url , { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    //  serverApi: ServerApiVersion.v1 
    })

//api endpoints
app.get('/' , (req , res) =>{
    
 res.status(200).send('hello world')
 console.log('get /')
})

app.post('/tinder/cards' , (req , res) => {
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

app.get('/tinder/cards' , (req , res) => {

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




//listen
app.listen(port , () => console.log(`listening  http://127.0.0.1:${port}`))
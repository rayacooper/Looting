const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive')
const controller = require('./controller')

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


massive(process.env.CONNECTION_STRING)
    .then((instance) => {
        app.set('db', instance);
        console.log('Db is connected')
    })
    .catch((error) => {
        console.log(`Error: ${error}`)
    })

app.get('/ping', (req, res) => {
    res.send('Oh Hello!')
})


app.get('/countBad', (req, res) => {
    const db = req.app.get('db');
    db.FIND_BAD_LIST()
        .then((rez) => {
            res.send({success: true, count: rez.length})
        })    
        .catch(error => {
            console.log(`Error: ${error}`)
        })
})

app.get('/countGood', (req, res) => {
    const db = req.app.get('db');
    db.FIND_GOOD_LIST()
        .then((rez) => {
            res.send({success: true, count: rez.length})
        })    
        .catch(error => {
            console.log(`Error: ${error}`)
        })
})

app.get('/randomBadItem/:random', (req, res) => {
    const db = req.app.get('db');
    const id = req.params.random;
    db.SELECT_BAD_ITEM([id])
        .then(rez => {
            res.send({success: true, item: rez[0]})
        })
})

app.get('/randomGoodItem/:random', (req, res) => {
    const db = req.app.get('db');
    const id = req.params.random;
    db.SELECT_GOOD_ITEM([id])
        .then(rez => {
            res.send({success: true, item: rez[0]})
        })
})



const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
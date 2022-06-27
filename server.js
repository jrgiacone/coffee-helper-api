const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')
app.use(cors())
const PORT = 3000
require('dotenv').config()


let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'CoffeeHelper'


MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true})
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })


// MongoClient.connect(`mongodb+srv://jrgiacone:jg091398@cluster0.ngzso.mongodb.net/?retryWrites=true&w=majority` , { useUnifiedTopology: true})
//     .then(client => {
//         console.log(`Connected to ${dbName} Database`)
//         db = client.db(dbName)
//     })

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



const coffeeMakers = {
  'v60':{
    'Name': 'v60',
    'Difficulty': 'Hard',
    'Recommended Water (ml)': 360,
    'Recommended Water Temp (C)': 97,
    'Recommended Coffee (g)': 22,
    'Minimum Coffee (g)': 15,
    'Maximum Coffee (g)': 30,
    'Required Materials': ['Hario v60', 'Paper Filters', 'Gooseneck Kettle', 'Groud Coffee']
  },
  'aeropress':{
    'Name': 'Aeropress',
    'Difficulty': 'Medium',
    'Recommended Water (ml)': 250,
    'Recommended Water Temp (C)': 95,
    'Recommended Coffee (g)': 15,
    'Minimum Coffee (g)': 10,
    'Maximum Coffee (g)': 25,
    'Required Materials': ['Aeropress', 'Aeropress Filters', 'Hot Water', 'Ground Coffee']
  },
  'french press':{
    'Name': 'French Press',
    'Difficulty': 'Easy',
    'Recommended Water (ml)': 540,
    'Recommended Water Temp (C)': 95,
    'Recommended Coffee (g)': 30,
    'Minimum Coffee (g)': 10,
    'Maximum Coffee (g)': 55,
    'Required Materials': ['French Press', 'Ground Coffee', 'Hot water']
  },
  'chemex':{
    'Name': 'Chemex',
    'Difficulty': 'Medium',
    'Recommended Water (ml)': 510,
    'Recommended Water Temp (C)': 97,
    'Recommended Coffee (g)': 30,
    'Minimum Coffee (g)': 20,
    'Maximum Coffee (g)': 44,
    'Required Materials': ['Hario v60', 'Paper Filters', 'Gooseneck Kettle', 'Groud Coffee']
  },
  'moka pot':{
    'Name': 'Moka Pot',
    'Difficulty': 'Medium',
    'Recommended Water (ml)': 220,
    'Recommended Water Temp (C)': 99,
    'Recommended Coffee (g)': 15,
    'Minimum Coffee (g)': 10,
    'Maximum Coffee (g)': 20,
    'Required Materials': ['Hario v60', 'Paper Filters', 'Gooseneck Kettle', 'Groud Coffee']
  },
  'vaccum pot':{
    'Name': 'Vaccum Pot',
    'Difficulty': 'Hard',
    'Recommended Water (ml)': 330,
    'Recommended Water Temp (C)': 99,
    'Recommended Coffee (g)': 20,
    'Minimum Coffee (g)': 15,
    'Maximum Coffee (g)': 40,
    'Required Materials': ['Hario v60', 'Paper Filters', 'Gooseneck Kettle', 'Groud Coffee']
  },
  'clever dripper':{
    'Name': 'Clever Dripper',
    'Difficulty': 'Medium',
    'Recommended Water (ml)': 250,
    'Recommended Water Temp (C)': 97,
    'Recommended Coffee (g)': 18,
    'Minimum Coffee (g)': 15,
    'Maximum Coffee (g)': 40,
    'Required Materials': ['Hario v60', 'Paper Filters', 'Gooseneck Kettle', 'Groud Coffee']
  },
  'Not Found':{
    'Error': 'Currently does not exist in system'
  }
}


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/', (req, res) => {
  res.sendFile(__dirname + '/api.html')
})

app.get('/api/:name', (req, res) => {
    console.log(req.params.name)
    const coffeeStyle = req.params.name.toLowerCase()
    if(coffeeMakers[coffeeStyle]){
        res.json(coffeeMakers[coffeeStyle])
    } else {
        res.json(coffeeMakers['Not Found'])
    }
})

app.post('/addJournal', (req, res) => {
  console.log(req.body.notes)
  db.collection('coffee').insertOne({notes: req.body.notes})
  .then(result => {
    console.log('note added')
    res.redirect('/')
  })
  .catch(error => console.error(error))
})

// app.post('/addJournal', (req, res) => {
//     db.collection('rappers').insertOne({stageName: req.body.stageName,
//     birthName: request.body.birthName, likes: 0})
//     .then(result => {
//         console.log('Rapper Added')
//         res.redirect('/')
//     })
//     .catch(error => console.error(error))
// })

app.listen(process.env.PORT || PORT, () =>{
  console.log(`Listening on Port ${PORT}`)
})


const { response } = require('express')
const express = require('express')
const app = express ()
const cors = require('cors')
const PORT = 3000

app.use(cors())

const coffeeMakers = {
  'pour over':{
    'Difficulty': 'Hard',
    'Recommended Water (ml)': 360,
    'Recommended Coffee (g)': 22,
    'Recommended Water Temp (C)': 97,
    'Required Materials': ['Hario v60', 'Paper Filters', 'Gooseneck Kettle', 'Groud Coffee']
  },
  'aeropress':{
    'Difficulty': 'Medium',
    'Recommended Water (ml)': 250,
    'Recommended Coffee (g)': 15,
    'Recommended Water Temp (C)': 95,
    'Required Materials': ['Aeropress', 'Aeropress Filters', 'Hot Water', 'Ground Coffee']
  },
  'french press':{
    'Difficulty': 'Easy',
    'Recommended Water (ml)': 540,
    'Recommended Coffee (g)': 30,
    'Recommended Water Temp (C)': 95,
    'Required Materials': ['French Press', 'Ground Coffee', 'Hot water']
  },
  'chemex':{
    'Difficulty': 'Medium',
    'Recommended Water (ml)': 510,
    'Recommended Coffee (g)': 30,
    'Recommended Water Temp (C)': 97,
    'Required Materials': ['Hario v60', 'Paper Filters', 'Gooseneck Kettle', 'Groud Coffee']
  },
  'moka pot':{
    'Difficulty': 'Medium',
    'Recommended Water (ml)': 220,
    'Recommended Coffee (g)': 15,
    'Recommended Water Temp (C)': 99,
    'Required Materials': ['Hario v60', 'Paper Filters', 'Gooseneck Kettle', 'Groud Coffee']
  },
  'vaccum pot':{
    'Difficulty': 'Hard',
    'Recommended Water (ml)': 330,
    'Recommended Coffee (g)': 20,
    'Recommended Water Temp (C)': 99,
    'Required Materials': ['Hario v60', 'Paper Filters', 'Gooseneck Kettle', 'Groud Coffee']
  },
  'cleaver dripper':{
    'Difficulty': 'Medium',
    'Recommended Water (ml)': 250,
    'Recommended Coffee (g)': 18,
    'Recommended Water Temp (C)': 97,
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

app.listen(process.env.PORT || PORT, () =>{
  console.log(`Listening on Port ${PORT}`)
})


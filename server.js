const { response } = require('express')
const express = require('express')
const app = express ()
const PORT = 3000


const coffeeMakers = {
  'pour over':{
    'difficulty': 'hard',
    'required materials': ['Hario v60', 'Paper Filters', 'Gooseneck Kettle', 'Groud Coffee']
  },
  'aeropress':{
    'diffuculty': 'medium',
    'required materials': ['Aeropress', 'Aeropress Filters', 'Hot Water', 'Ground Coffee']
  },
  'french press':{
    'difficulty': 'easy',
    'required materials': ['French Press', 'Ground Coffee', 'Hot water']
  },
  'Not Found':{
    'Error': 'Currently does not exist in system'
  }
}


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
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

app.listen(PORT, () =>{
  console.log(`Listening on Port ${PORT}`)
})


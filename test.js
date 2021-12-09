
// 홈화면 = localhost:3000/
app.get('/', (req, res) => {
  res.send("홈화면");
});

// 로그인 화면 = localhost:3000/login
app.get('/login', (req, res) => {
  res.send("로그인 화면");
});


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://santinomin:1234@cluster0.mbbeu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch( err => console.log(err))
  

const express = require('express')
const app = express();
const port = 3000

const members = require('./members');

app.get('/api/users/:type', async (req, res) => {
  let { type } = req.params;

  if (type == 'Changwon'){
    let data = [{
        name: "석상민",
        city: "Changwon"
      },
     {
        name: "황창주",
        city: "Changwon"
     },
    ];
    res.send(data);
  } else if (type == 'Busan'){
    let date = [{
      name: "여동현",
      city: "Busan"
    }
    ]
    res.send(data);
  } else {
    res.send('Type is not correct.');
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
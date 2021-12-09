const express = require('express')
const app = express();
const port = 3000

const members = require('./members');

app.get('/api/members', (req, res) => {
  res.send(members);
})

app.get('/api/members/:id', (req, res) => {
  const { id } = req.params;
  const member = members.find((m) => m.id === Number(id));
  if (member){
    res.send(member);
  } else {
    res.status(404).send( {message: 'There is no such member'});
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
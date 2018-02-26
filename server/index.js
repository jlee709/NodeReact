const express = require('express');
const PORT = process.ENV.PORT || 5000;


const app = express();

app.get('/', (req, res) => {
  res.send({'hi': 'Anyoung'});
});



server.listern(PORT) => {
  res.send('sanity': 'check');
}
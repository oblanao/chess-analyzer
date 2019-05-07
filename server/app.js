const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.get('/questions/topics', (req, res) => {
  res.send([{title: 'pupu', questions: 65}, {title: 'mumu', questions: 25}]).status(200)
})

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
})

module.exports = app;

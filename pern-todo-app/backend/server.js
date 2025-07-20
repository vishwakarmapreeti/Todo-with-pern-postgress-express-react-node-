const express = require('express');
const cors = require('cors');
const app = express();
const todoRoutes = require('./routes/todos');

app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});

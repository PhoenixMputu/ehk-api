require('dotenv').config();
const express = require('express');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', uploadRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
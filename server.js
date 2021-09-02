const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const webRoutes = require('./routes/webRoutes');

// setting up port and our app
const app = express();
const PORT = process.env.port || 8000;

// setting up our routes 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', webRoutes);

// strat up our server port
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));
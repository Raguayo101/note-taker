const express = require('express');
apiRoutes = require('./route/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

// setting up port and our app
const app = express();
const PORT = process.env.port || 3000;

// setting up our routes 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.listen('/', htmlRoutes);

// stras up our server port
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));
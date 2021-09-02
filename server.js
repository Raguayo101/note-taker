const express = require('express');
apiRoutes = require('./route/apiRoutes')
const webRoutes = require('./routes/webRoutes')

// setting up port and our app
const app = express();
const PORT = process.env.port || 3000;

// setting up our routes 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.listen('/', webRoutes);

// stras up our server port
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));
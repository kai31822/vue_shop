const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routers/users');
const { sequelize, connectToDB } = require('./connectToDB');

//
const app = express();

const PORT = process.env.PORT || 3000;

/********************\
     Middleware
\********************/
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRoutes);
/********************\
        Routes
\********************/
app.get('/', (request, response) => {
    // response.status(200).send('Hello from Homepage');
    response.status(200).json({ message: 'Hello from Homepage' });
});

/********************\
    Start listing
\********************/
app.listen(PORT, async () => {
    console.log(`Server running on port : http://localhost:${PORT}`);
    await connectToDB();
});

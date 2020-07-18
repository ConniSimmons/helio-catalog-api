const mongoose = require('mongoose');

const dbUri = require('./config').DBURI;

const dbOptions = { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
}

module.exports = function () {
    mongoose.connect(dbUri, dbOptions)
    .then((result) =>
    {
        return result;
    })
    .catch((err) =>
    {
        console.log('Error connecting to db: ', err);
    });

    mongoose.connection.on('connected', () => {
        console.log('Successfully connected to MongoDB!');
    });

    mongoose.connection.on('error', (err) => {
        console.log('MongoDB connection error: ', err);
    });

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB connection was disconnected.');
})

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Closing MongoDB connection due to application termination.');
        process.exit();
    });
});
}
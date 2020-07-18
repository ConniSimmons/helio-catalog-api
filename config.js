require('dotenv').config();
const dbName = 'catalog';
module.exports= {
   PORT: process.env.PORT || 8080,
   dbName,
   APPNAME: 'Catalog',
   DBURI: `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@cluster0-mznto.mongodb.net/${dbName}?retryWrites=true&w=majority`,

  
}
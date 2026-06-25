const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb://fittrack:fittrack123@ac-pvyx40j-shard-00-00.doniasd.mongodb.net:27017,ac-pvyx40j-shard-00-01.doniasd.mongodb.net:27017,ac-pvyx40j-shard-00-02.doniasd.mongodb.net:27017/?ssl=true&replicaSet=atlas-s8zmak-shard-0&authSource=admin&appName=Cluster0');
    } catch (err) {
        console.error(`Database connection error: ${err.message}`);
}
};

module.exports = connectDB;



// mongoose.connect('mongodb://fittrack:fittrack123@ac-pvyx40j-shard-00-00.doniasd.mongodb.net:27017,ac-pvyx40j-shard-00-01.doniasd.mongodb.net:27017,ac-pvyx40j-shard-00-02.doniasd.mongodb.net:27017/?ssl=true&replicaSet=atlas-s8zmak-shard-0&authSource=admin&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }, err => {
//   if (err) throw err;
//   console.log('Connected to MongoDB!')
// }

// );

// module.exports = mongoose.connection;

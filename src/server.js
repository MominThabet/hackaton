const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();
const postRoute = require('../')

const PORT = process.env.PORT;

app.use("/api", require("./app/routes/mainRouter"));

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`server running at PORT: ${PORT}`);
  });
};
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected : ${conn.connection.host}`);
};
startServer();




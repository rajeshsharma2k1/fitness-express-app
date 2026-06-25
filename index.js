const express = require("express");
const path = require("path");
const routes = require("./routes/api");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./config/connection");
const cors = require('cors');
db();
const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: ['https://mellow-chebakia-b6eee0.netlify.app', 'http://localhost:3001', 'http://localhost:3000'],
}));

// Serve up static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

app.use("/api", routes);

// db.once("open", () => {
//   app.listen(PORT, (res) => {
//     console.warn(`API server running on port ${PORT}!`);
//   });
// });

app.listen(PORT, (res) => {
    console.warn(`API server running on port ${PORT}!`);
});

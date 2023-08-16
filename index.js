const express = require("express");
const path = require("path");
const routes = require("./routes/api");
const db = require("./config/connection");
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: 'https://mellow-chebakia-b6eee0.netlify.app'
}));

// Serve up static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

app.use("/api", routes);

db.once("open", () => {
  app.listen(PORT, (res) => {
    console.warn(`API server running on port ${PORT}!`);
  });
});


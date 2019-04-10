const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");
const MongoClient = require('mongodb').MongoClient;
const subjectRoutes = require("./routes/subject");
const userRoutes = require("./routes/user");
autoIncrement = require('mongoose-auto-increment');
//const session = require('express-session');
//const MongoStore = require('connect-mongo')(session);
//const url = 'localhost:27017/myDatabase';
//const db = mongoose.connection;

const dbName = 'myproject';
const app = express();

/*app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
})); */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use("/images", express.static(path.join("images")));
//app.use(app.router);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/subject", subjectRoutes);
app.use("/api/user", userRoutes);
//app.use("/api/user", userRoutes);
//app.use("/api/product",  menRoutes);
//app.use("/api/women", womenRoutes);
//app.use("/api/allCategoryName", allCategoryRoutes);
//app.use("/api/session", sessionRoutes);
console.log('app connected');
module.exports = app;

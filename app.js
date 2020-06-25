const express = require("express");

const app = express();
const Router = require("./router/router");

app.set("view engine", "pug");
app.use("/", Router);

app.listen(3002, () => console.log("aplicacion lista"));

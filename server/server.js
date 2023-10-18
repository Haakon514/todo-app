import express from "express";
const app = express();

app.use(express.static("../client/dist"))

app.listen(process.env.port || 3000);


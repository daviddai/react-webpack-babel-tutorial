// @ts-ignore
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

const app = express();

app.get("/ping", (req, res) => {
   res.send("pong");
});

app.listen(5000, () => {
   console.log("Server is now running and listening on port 5000....");
});

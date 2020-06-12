// @ts-ignore
import express from "express";
// @ts-ignore
import path from "path";
import React from "react";
// @ts-ignore
import fs from "fs";
// import { renderToString } from "react-dom/server";

const app = express();

app.use(express.static("dist"));

app.get("/ping", (req, res) => {
   res.send("pong");
});

app.get("/", (req, res) => {
   fs.readFile("index.html", (err, html) => {
      if (err) {
         console.log(err);
         throw err;
      } else {
         res.send(html);
      }
   });
});

app.listen(5000, () => {
   console.log("Server is now running and listening on port 5000....");
});

// @ts-ignore
import express from "express";
// @ts-ignore
import fs from "fs";
// @ts-ignore
import path from "path";
import React from "react";
import { renderToString } from 'react-dom/server';
import Application from "../app/Application";

const app = express();

app.use(express.static("dist/server"));

app.get("/ping", (req, res) => {
   res.send("pong");
});

app.get("/ssr", (req, res) => {
   fs.readFile(path.join(__dirname, "../../dist/server/index.html"), (err, html) => {
      if (err) {
         console.log(err);
         throw err;
      } else {
         const body: string = renderToString(<Application/>);
         res.send(html.toString().replace("${body}", body));
      }
   });
});

app.listen(5000, () => {
   console.log("Server is now running and listening on port 5000....");
});
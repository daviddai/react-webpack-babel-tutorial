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
app.use(express.static("dist/client"));

app.get("/ping", (req, res) => {
   res.send("pong");
});

app.get("/csr", (req, res) => {
   console.log("request called at entry: /csr");
   fs.readFile(path.join(__dirname, "../../dist/client/index.html"), (err, html) => {
      if (err) {
         console.log(err);
         throw err;
      } else {
         res.send(html.toString());
      }
   });
});

app.get("/ssr", (req, res) => {
   console.log("request called at entry: /ssr");
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
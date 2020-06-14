// @ts-ignore
import express from "express";
// @ts-ignore
import fs from "fs";
import React from "react";
import { renderToString } from 'react-dom/server';
import Application from "./app/Application";

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

app.get("/ssr", (req, res) => {
   res.send(getRendered(renderToString(<Application/>)));
});

app.listen(5000, () => {
   console.log("Server is now running and listening on port 5000....");
});

const getRendered = (body: string) => `
   <!DOCTYPE html>
    <html>
        <head></head>
        <body>
            <div id="app">
                ${body}
            </div>
        </body>
    </html>
`;
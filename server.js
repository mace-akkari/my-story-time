import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = process.env.PORT || 3000;

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFilePath);
const publicDirectory = path.join(currentDirectory, "public");

app.use(express.json());
app.use(express.static(publicDirectory));

app.listen(port, () => {
  console.log(`My Story Time is running at http://localhost:${port}`);
});

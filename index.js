// IMPORT EXPRESS
import express from "express";
// IMPORT CORS
import cors from "cors";
// IMPORT ROUTES
import ROUSchedule from "./routes/scheduleRoute.js";
 
// INIT EXPRES
const app = express();

// USE BODY PARSER
app.use(express.urlencoded({ extended: true }));

// USE EXPRESS JSON
app.use(express.json());

// USE CORS
app.use(cors());
 
// USE ROUTER
app.use("/v1/schedule/", ROUSchedule);
 
app.listen(5000, () => console.log('Server running at http://localhost:5000'));
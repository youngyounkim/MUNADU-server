import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./router";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const options: cors.CorsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
};

app.use(router);
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("무나두 스타트");
});

app.use(cors(options));
app.listen(PORT, () => {
  console.log(`server on`);
});

import { config } from "dotenv";
config();
import express, {
  Request,
  Response,
  NextFunction,
  Application,
  ErrorRequestHandler,
} from "express";

import helmet from "helmet";
import connectDB from "./db/db.connect";
import router from "./routers/app";

import createHttpError from "http-errors";

const app: Application = express();

connectDB();
app.use(helmet())

app.use(express.json());
app.use("/", router);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

const errorHanlder: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status).send("Page Not Found");
};

app.use(errorHanlder);

const PORT: Number = Number(process.env.PORT) || 3000;

app.listen(PORT, () => console.log("Server Started"));

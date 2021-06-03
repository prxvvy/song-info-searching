import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cors from "cors";
import getSongInfo from "./routes/get-song-info.route";

config();

const port: number = Number(process.env["PORT"]) || 3001;
const app: express.Application = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api", getSongInfo);

app.listen(port, () => console.log(`Server on port ${port}`));
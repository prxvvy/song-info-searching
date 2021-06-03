import { Router } from "express";
import getSongInfoController from "./get-song-info.controller";

const router: Router = Router();

router.get("/getSong/:song_name?", getSongInfoController);

export = router;
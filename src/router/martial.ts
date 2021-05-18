import { Router } from "express";
import * as martial from "../controller/martial";

const martialRouter = Router();

martialRouter.get("/info", martial.info);
martialRouter.get("/list/:userid", martial.list);
martialRouter.post("/bookmark", martial.bookmark);
martialRouter.get("/rank", martial.rank);

export default martialRouter;

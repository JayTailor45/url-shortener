import { Router } from "express";
import * as controller from "../controller/shortener.controller.js";

const router = Router();

router.post("/shorten", controller.shortenUrl);

router.get("/:shortUrl", controller.redirectToLongUrl);

export default router;

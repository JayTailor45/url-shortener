import { Router } from "express";
import { CustomResponse } from "../utils/response.util.js";

const router = Router();

router.get("/health-check", (req, res) => {
  res.json(
    CustomResponse.success("Server is up and running", { status: "OK" }),
  );
});

export default router;

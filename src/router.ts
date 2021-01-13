import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (request: Request, response: Response) =>
  response.json("Hello World")
);

export { router };

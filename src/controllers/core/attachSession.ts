import { Request, Response } from "express";
import { SessionRepo } from "../../repositories/SessionRepo";
import { createError } from "../../shared/utils/createError";
import { ISessionRequest } from "./types/ISessionRequest";

export const attachSession = () => {
  return async (req: Request, res: Response) => {
    const sessionId = req.query.sessionId?.toString();
    if (!sessionId) {
      return res.status(401).send(createError("No session found"));
    }

    const sessionRepo = new SessionRepo();
    const session = await sessionRepo.findById(sessionId);
    if (!session) {
      return res.status(401).send(createError("Invalid session"));
    }

    (req as ISessionRequest).session = session;
  };
};

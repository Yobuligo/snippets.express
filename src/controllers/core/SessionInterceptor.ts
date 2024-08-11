import { NextFunction, Request, Response } from "express";
import { SessionRepo } from "../../repositories/sessionRepo/SessionRepo";
import { InvalidSessionError } from "../../shared/errors/InvalidSessionError";
import { NoSessionError } from "../../shared/errors/NoSessionError";
import { createError } from "../../shared/utils/createError";
import { ISessionRequest } from "./types/ISessionRequest";

export const SessionInterceptor = (
  requestHandler: (
    req: ISessionRequest,
    res: Response,
    next: NextFunction
  ) => void
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const sessionId = req.query.token?.toString();
    if (!sessionId) {
      return res
        .status(401)
        .send(createError("No session found", NoSessionError.name));
    }

    const sessionRepo = new SessionRepo();
    const session = await sessionRepo.findById(sessionId);
    if (!session) {
      return res
        .status(401)
        .send(createError("Invalid session", InvalidSessionError.name));
    }

    const sessionRequest = req as ISessionRequest;
    sessionRequest.session = session;
    requestHandler(sessionRequest, res, next);
  };
};

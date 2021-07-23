import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

const CheckAuth = function (req: Request, res: Response, next: NextFunction) {
  const token = <string>req.headers.authorization;
  let jwtPayload;
  try {
    jwtPayload = <any>verify(token.split(" ")[1], "Yi2ZyQmYBS7TBXHogEAC");
    res.locals.jwtPayload = jwtPayload;
    res.locals.username = jwtPayload["login"];
  } catch (error) {
    res.status(401).send();
    return;
  }
  next();
};

export { CheckAuth };

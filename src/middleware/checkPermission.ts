import { AccessControl, Query, Permission } from "accesscontrol";
import { NextFunction, Response } from "express";
import { grantList } from "../configs";
import { RESOURCE_TYPES } from "../enums";
import { ExtendRequest } from "../interfaces/interfaces";

const ac = new AccessControl(grantList);

// Middleware function to check permissions
export const checkPermission = (
  action: keyof Query,
  resource: keyof typeof RESOURCE_TYPES
) => {
  return (req: ExtendRequest, res: Response, next: NextFunction) => {
    if (req.params.role) {
      const { role } = req.params;
      const permission = ac.can(role)[action](resource) as Permission;
      if (permission.granted) {
        req.permission = permission;
        next();
      } else {
        res.status(403).json("Permission denied").end();
      }
    }
    const { role } = req.body;
    const permission = ac.can(role)[action](resource) as Permission;
    if (permission.granted) {
      req.permission = permission;
      next(); // Permission granted, continue to the next middleware or route handler
    } else {
      // Permission denied, send forbidden response
      res.status(403).json("Permission denied").end();
    }
  };
};

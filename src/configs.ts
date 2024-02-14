import { USER_TYPES } from "./enums";

export const  grantList = [
    {
      role: USER_TYPES.ADMIN,
      resource: "file",
      action: "create:any",
      attributes: "*, !views",
    },
    { role: USER_TYPES.ADMIN, resource: "file", action: "read:any", attributes: "*" },
    {
      role: USER_TYPES.ADMIN,
      resource: "file",
      action: "update:any",
      attributes: "*, !views",
    },
    { role: USER_TYPES.ADMIN, resource: "file", action: "delete:any", attributes: "*" },
  
    {
      role: USER_TYPES.USER,
      resource: "file",
      action: "create:own",
      attributes: "*, !rating, !views",
    },
    { role: USER_TYPES.USER, resource: "file", action: "read:own", attributes: "*" },
    {
      role: USER_TYPES.USER,
      resource: "file",
      action: "update:own",
      attributes: "*, !rating, !views",
    },
    { role: USER_TYPES.USER, resource: "file", action: "delete:own", attributes: "*" },
    { role: USER_TYPES.PROFESSIONAL, resource: "file", action: "read:own", attributes: "*" },
    { role: USER_TYPES.ADMIN, resource: "file", action: "read:any", attributes: "*, !role, !title" },
  ];
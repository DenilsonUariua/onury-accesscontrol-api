import { Permission } from "accesscontrol";
import { Request } from "express";
import { USER_TYPES } from "../enums/user-types";



export interface IGRANT {
  role: keyof typeof USER_TYPES;
  resource: "file" | "document";
  action: string;
  attributes: string;
}

export type ExtendRequest = Request & { permission?: Permission };

import express from "express";
import { data } from "../data";
import { ExtendRequest } from "../interfaces/interfaces";
import { checkPermission } from "../middleware";

const router = express.Router();


// Define routes with middleware
router.post(
  "/create/file",
  checkPermission("createAny", "file"),
  function (req, res, next) {
    // This function will be executed only if permission is granted
    res.status(200).json("Permission for creating granted");
  }
);
router.post(
  "/update/file",
  checkPermission("updateAny", "file"),
  function (req, res, next) {
    // This function will be executed only if permission is granted
    res.status(200).json("Permission updating granted");
  }
);
router.post(
  "/delete/file",
  checkPermission("deleteAny", "file"),
  function (req, res, next) {
    // This function will be executed only if permission is granted
    res.status(200).json("Permission deleting granted");
  }
);
router.post(
  "/read/file",
  checkPermission("readAny", "file"),
  function (req: ExtendRequest, res) {
    if (req.permission) {
      res.status(200).json(req.permission.filter(data));
    } else {
      // This function will be executed only if permission is granted
      res.status(200).json("Permission reading granted");
    }
  }
);

export default router;

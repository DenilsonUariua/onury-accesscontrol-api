import dotenv from "dotenv";
import express, { Response } from "express";
import { data } from "./data";
import { ExtendRequest } from "./interfaces/interfaces";
import { checkPermission } from "./middleware";
import router from "./routes/access-control";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(router);
app.get("/", (req, res) => {
  const HTMLResponse = `<h1 style="color:blue">Demonstration of Onury access control as Middleware</h1> <h2>Links</h2> <div><ol> <a href='http://localhost:${port}/users/admin'><li>Admin User</li></a> <a href='http://localhost:${port}/users/user'><li>Normal User</li></a> </ol></div>`;

  res.send(HTMLResponse);
});

app.get(
  "/users/:role",
  checkPermission("create", "file"),
  (req: ExtendRequest, res: Response) => {
    if (req?.permission) {
      res.status(200).json(req.permission.filter(data));
    } else {
      res.send("My API");
    }
  }
);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

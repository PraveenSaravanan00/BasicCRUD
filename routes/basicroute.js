import express from "express";
import {
  basicCreate,
  basicRead,
  basicUpdate,
  basicDelete,
} from "../controllers/basiccontroller.js";

const Router = express.Router();

Router.post("/basicCreate", basicCreate);
Router.get("/basicRead", basicRead);
Router.put("/basicUpdate", basicUpdate);
Router.delete("/basicdelete", basicDelete);

export default Router;

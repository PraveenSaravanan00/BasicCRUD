import express from "express";
import {basicCreate} from "../controllers/basiccontroller.js"

const Router =express.Router();

Router.post("/basicCreate",basicCreate)

// basicCreate
export default Router;
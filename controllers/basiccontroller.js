import {
  createService,
  readService,
  updateService,
  deleteService,
} from "../services/basicservice.js";

export const basicCreate = async (req, res, next) => {
  try {
    const response = await createService(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      status: error.statusCode,
      message: error.message,
    });
  }
};

export const basicRead = async (req, res, next) => {
  try {
    const response = await readService(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      status: error.statusCode,
      message: error.message,
    });
  }
};

export const basicUpdate = async (req, res, next) => {
  try {
    console.log("basicUpdate controller==>", req.body);
    const response = await updateService(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      status: error.statusCode,
      message: error.message,
    });
  }
};

export const basicDelete = async (req, res, next) => {
  try {
    console.log("basicUpdate controller==>", req.body);
    const response = await deleteService(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      status: error.statusCode,
      message: error.message,
    });
  }
};

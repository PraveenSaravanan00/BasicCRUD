import basicItems from "../models/basicmodels.js";

export const createService = async (request) => {
  try {
    console.log("service request===>", request.body);
    const output = new basicItems(request.body);
    console.log("service output===>", output);
    await output.save();
    return {
      statusCode: 200,
      statusMessage: "Item created successfully",
    };
  } catch (error) {
    const err = new Error(error);
    err.statusCode = error.status;
    throw err;
  }
};

export const readService = async (request) => {
  try {
    if (request?.body?.id) {
      const response = await basicItems.findOne({ _id: request?.body?.id });

      if(!response){
      return {
        statusCode: 404,
        statusMessage: "Item Not Found",
      };
      }
      return {
        statusCode: 200,
        statusMessage: "Item Fetched successfully",
        data: response,
      };
    } else {
      const response = await basicItems.find();
      return {
        statusCode: 200,
        statusMessage: "Items Fetched successfully",
        data: response,
      };
    }
  } catch (error) {
    const err = new Error(error);
    err.statusCode = error.status;
    throw err;
  }
};

export const updateService = async (request) => {
  try {
    const { _id, Name, Gender, Email, MobileNumber } = request.body;
    const response = await basicItems.findByIdAndUpdate(
      _id,
      {
        Name,
        Gender,
        Email,
        MobileNumber,
      },
      { new: true }
    );
    console.log("response===>", response);
    if (!response) {
      return {
        statusCode: 404,
        statusMessage: "Item not found",
      };
    }
    return {
      statusCode: 200,
      statusMessage: "Item updated successfully",
      data: response,
    };
  } catch (error) {
    const err = new Error(error);
    err.statusCode = error.status;
    throw err;
  }
};

export const deleteService = async (request) => {
  try {
    const response = await basicItems.findByIdAndDelete({
      _id: request?.body?.id,
    });
    if (!response) {
      return {
        statusCode: 404,
        statusMessage: "Item not found",
      };
    }
    return {
      statusCode: 200,
      statusMessage: "Item deleted successfully",
    };
  } catch (error) {
    const err = new Error(error);
    err.statusCode = error.status;
    throw err;
  }
};

import mongoose from "mongoose";

const basicItem = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  MobileNumber: {
    type: Number,
    required: true,
  },
});

const basicItems = mongoose.model("basicItem", basicItem);

export default basicItems;

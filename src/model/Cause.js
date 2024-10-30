import mongoose from "mongoose";

const cause = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Name is required"],
      minlength: 6,
      maxlength: 255,
    },

   user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    reqired: [true, "UserId is required"]
   },

   category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    reqired: [true, "CategoryId is required"]
   },

    images: {
      type: String,
      requied: [true, "Images is required"],
      maxlength: 255
    },

    description: {
        type: String,
        maxlength: 255
    },

    charity_fund: {
      type: Number,
      required: [true, "Charity fund is required"],
    },

    

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Cause", cause);

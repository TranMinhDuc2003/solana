import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },

    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },

    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: 6,
      maxlength: 255,
    },

    images: {
      type: String,
      required: [true, "Images is required"],
      maxlength: 255,
    },

    description: {
      type: String,
      required: [true, "Email is required"],
    },

    messages: {
      type: String,
      required: [true, "Message is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Post", postSchema);

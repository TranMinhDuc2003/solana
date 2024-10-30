import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: 6,
        maxlength: 30
    },

    email: {
        type: String,
        required: [true, "Email is required"],
    },

    phone: {
        type: String,
        required: [true, "Phone is required"],
        minlength: 10,
        maxlength: 10
    },

    messages: {
        type: String,
        required: [true, "Messages is required"]
    }
},
{
    timestamps: true,
    versionKey: false
})

export default mongoose.model("Contact", contactSchema)
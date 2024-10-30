import mongoose from "mongoose";

const contibuteSchema = new mongoose.Schema({
    cause_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cause",
        required: [true, "Cause is required"]
    },

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

    contribute: {
        type: Number,
        required: [true, "Contribute is required"],
        min: 1
    }

},
{
    timestamps: true,
    versionKey:false
})

export default mongoose.model("Contribute", contibuteSchema)
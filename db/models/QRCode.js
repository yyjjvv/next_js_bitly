import mongoose from "mongoose";

const qRCodeSchema = new mongoose.Schema(
    {
        title: { type: String, default: "" },
        url: { type: String, default: "" },
    },
    {
        timestamps: true,
    }
);

const QRCode =
    mongoose.models["QRCode"] ||
    mongoose.model("QRCode", qRCodeSchema);

export default QRCode;
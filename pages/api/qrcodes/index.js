import mongoose from "mongoose";
import dbConnect from "@/db/dbConnect";
import QRCode from "@/db/models/QRCode";

export default async function handler(req, res) {
    await dbConnect();

    switch (req.method) {
        case "POST":
            const newQRCode = await QRCode.create(req.body);
            res.status(201).send(newQRCode);
            break;
        case "GET":
            // const props = Object.keys(QRCode.schema.paths);
            // console.log(props);
            const qRCodes = await QRCode.find();
            res.send(qRCodes);
            break;
        default:
            res.status(404).send();
            break;
    }
}

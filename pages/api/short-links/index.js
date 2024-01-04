import mongoose from "mongoose";
import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";

export default async function handler(req, res) {
    await dbConnect();
    console.log(ShortLink);

    switch (req.method) {
        case "POST":
            const newShortLink = await ShortLink.create(req.body);
            res.status(201).send(newShortLink);
            break;
        case "GET":
            const shortLinks = await ShortLink.find();
            res.send(shortLinks);
            break;
        default:
            res.status(404).send();
            break;
    }
}

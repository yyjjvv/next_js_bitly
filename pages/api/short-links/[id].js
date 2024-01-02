export default function handler(req, res) {
    // res.send(req.query);
    // res.send(req.body);
    // res.send(req.cookies);
    switch (req.method) {
        case "GET":
            res.send("ShortLink 조회");
            break;
        case "POST":
            res.send("ShortLink 등록");
            break;
        default:
            res.send();
            break;
    }
}

import { createHmac } from "crypto";

const createShortURL = (url) => {
    const hash = createHmac("sha256", "shortit")
        .update(url + Date.now())
        .digest("hex");
    return hash.slice(0, 6);
};

export default createShortURL;

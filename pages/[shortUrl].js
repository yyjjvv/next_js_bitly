import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";

export const getServerSideProps = async (context) => {
    const { shortUrl } = context.query;
    await dbConnect();
    const shortLink = await ShortLink.findOne({ shortUrl });
    if (shortLink) {
        return {
            redirect: {
                destination: shortLink.url,
                permanent: false,
            },
        };
    }
    return {
        notFound: true,
    };
};

const ShortUrlPage = () => {
    return null;
};
export default ShortUrlPage;

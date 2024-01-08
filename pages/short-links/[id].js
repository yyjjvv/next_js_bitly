// packages
import Head from "next/head";
import { useRouter } from "next/router";
// customed files
import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";
import axios from "@/lib/axios";
import styles from "@/styles/ShortLinkEditPage.module.css";
// components
import ShortLinkForm, { ShortLinkFormType } from "@/components/ShortLinkForm";

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    await dbConnect();
    const shortLink = await ShortLink.findById(id);
    if (shortLink) {
        return {
            props: {
                shortLink: JSON.parse(JSON.stringify(shortLink)),
            },
        };
    }
    return {
        notFound: true,
    };
};

const ShortLinkEditPage = ({ shortLink }) => {
    const router = useRouter();
    const { id } = router.query;

    const handleSubmit = async (values) => {
        await axios.patch(`/short-links/${id}`, values);
        router.push("/short-links");
    };

    return (
        <>
            <Head>
                <title>주소 수정하기 - Shortit</title>
            </Head>
            <div className={styles.page}>
                <h1 className={styles.title}>수정하기</h1>
                <ShortLinkForm
                    type={ShortLinkFormType.Edit}
                    initialValues={shortLink}
                    onSubmit={handleSubmit}
                />
            </div>
        </>
    );
};

export default ShortLinkEditPage;

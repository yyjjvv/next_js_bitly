// packages
import Head from "next/head";
import { useRouter } from "next/router";
// customed files
import axios from "@/lib/axios";
import styles from "@/styles/ShortLinkCreatePage.module.css";
// components
import ShortLinkForm from "@/components/ShortLinkForm";

const ShortLinkCreatePage = () => {
    const router = useRouter();

    const handleSubmit = async (values) => {
        await axios.post("/short-links", values);
        router.push("/short-links");
    };

    return (
        <>
            <Head>
                <title>새 URL 생성하기 - MakeItShort</title>
            </Head>
            <div className={styles.page}>
                <h1 className={styles.title}>새 URL 생성하기</h1>
                <ShortLinkForm onSubmit={handleSubmit} />
            </div>
        </>
    );
};

export default ShortLinkCreatePage;

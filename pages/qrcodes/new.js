// packages
import Head from "next/head";
import { useRouter } from "next/router";
// customed files
import axios from "@/lib/axios";
import styles from "@/styles/QRCodeCreatePage.module.css";
// components
import QRCodeForm from "@/components/QRCodeForm";

const QRCodeCreatePage = () => {
    const router = useRouter();

    const handleSubmit = async (values) => {
        await axios.post("/qrcodes", values);
        router.push("/qrcodes");
    };

    return (
        <>
            <Head>
                <title>새 QRCode 추가하기 - MakeItShort</title>
            </Head>
            <div className={styles.page}>
                <h1 className={styles.title}>새 QRCode 추가하기</h1>
                <QRCodeForm onSubmit={handleSubmit} />
            </div>
        </>
    );
};

export default QRCodeCreatePage;

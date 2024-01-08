// packages
import Head from "next/head";
import { useRouter } from "next/router";
// customed files
import QRCode from "@/db/models/QRCode";
import dbConnect from "@/db/dbConnect";
import axios from "@/lib/axios";
import styles from "@/styles/QRCodeEditPage.module.css";
// components
import QRCodeForm, { QRCodeFormType } from "@/components/QRCodeForm";

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    await dbConnect();
    const qrcode = await QRCode.findById(id);
    if (!qrcode) {
        return {
            notFound: true,
        };
    } else {
        return {
            props: {
                qrcode: JSON.parse(JSON.stringify(qrcode)),
            },
        };
    }
};

const QRCodeEditPage = ({ qrcode: initialQRCode }) => {
    const router = useRouter();
    const { id } = router.query;

    const handleSubmit = async (values) => {
        await axios.patch(`/qrcodes/${id}`, values);
        router.push("/qrcodes");
    };

    return (
        <>
            <Head>
                <title>QRCode 수정하기 - Shortit</title>
            </Head>
            <div className={styles.page}>
                <h1 className={styles.title}>QRCode 수정하기</h1>
                <QRCodeForm
                    type={QRCodeFormType.Edit}
                    initialValues={initialQRCode}
                    onSubmit={handleSubmit}
                />
            </div>
        </>
    );
};

export default QRCodeEditPage;

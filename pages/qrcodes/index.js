// packages
import Head from "next/head";
import { useState } from "react";
// customed files
import dbConnect from "@/db/dbConnect";
import QRCode from "@/db/models/QRCode";
import axios from "@/lib/axios";
import styles from "@/styles/QRCodeListPage.module.css";
// components
import Button from "@/components/Button";
import Link from "@/components/Link";
import QRCodeList from "@/components/QRCodeList";

export const getServerSideProps = async () => {
    await dbConnect();
    const qrcodes = await QRCode.find();
    return {
        props: {
            qrcodes: JSON.parse(JSON.stringify(qrcodes)),
        },
    };
};

const QRCodeListPage = ({ qrcodes: initialQRCodes }) => {
    const [qrcodes, setQRCodes] = useState(initialQRCodes);

    const handleDelete = async (id) => {
        await axios.delete(`/qrcodes/${id}`);
        setQRCodes((prevQRCodes) =>
            prevQRCodes.filter((qrcode) => qrcode._id !== id)
        );
    };

    return (
        <>
            <Head>
                <title>QRCode 리스트 - MakeItShort</title>
            </Head>
            <div className={styles.page}>
                <header className={styles.header}>
                    <h1 className={styles.title}>QRCode 리스트</h1>
                    <Button as={Link} href="/qrcodes/new">
                        새로 만들기
                    </Button>
                </header>
                <QRCodeList items={qrcodes} onDelete={handleDelete} />
            </div>
        </>
    );
};
export default QRCodeListPage;

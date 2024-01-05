import ShortLinkForm from '@/components/ShortLinkForm';
import styles from '@/styles/ShortLinkCreatePage.module.css';
import Head from 'next/head';
import axios from '@/lib/axios';
import { useRouter } from 'next/router';

export default function ShortLinkCreatePage() {
  const router = useRouter();
  const handleSubmit = async (values) => {
    await axios.post('/short-links', values);
    router.push('/short-links')
  }
  return (
    <>
      <Head>
        <title>새 URL 추가 - Shortit</title>
      </Head>
      <div className={styles.page}>
        <h1 className={styles.title}>새 URL 추가</h1>
        <ShortLinkForm onSubmit={handleSubmit} />
      </div>
    </>
  );
}

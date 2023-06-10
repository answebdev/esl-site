import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Index.module.css';

const Index = () => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <Head>
                    <title>ESL Site</title>
                    <meta name="description" content="A blog of random content" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <p>Hello world!</p>
            </div>
        </div>
    );
};

export default Index;
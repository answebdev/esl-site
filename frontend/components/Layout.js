import Navbar from "./Navbar";
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div>
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;

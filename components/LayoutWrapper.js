import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import consoleInfo from "./consoleInfo";

let consoleInfoMessage = false;

const LayoutWrapper = ({ children }) => {
    if (!consoleInfoMessage) {
        consoleInfo();
        consoleInfoMessage = true;
    }

    return (
        <>
            <div className="flex flex-col justify-between">
                <Navbar />
                <main className="mx-auto w-full max-w-3xl px-8 py-12 sm:px-6  xl:max-w-5xl xl:px-0">
                    {children}
                </main>
                <Footer />
                <ToastContainer />
            </div>
        </>
    );
};

export default LayoutWrapper;

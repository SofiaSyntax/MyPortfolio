import "../styles/globals.css";
import { PortfolioProvider } from "../contexts/PortfolioContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <PortfolioProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow">
            <Component {...pageProps} />
          </main>

          <Footer />
        </div>
      </PortfolioProvider>
    </div>
  );
}

export default MyApp;

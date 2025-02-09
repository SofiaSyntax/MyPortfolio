import "../styles/globals.css";
import { PortfolioProvider } from "../contexts/PortfolioContext";

function MyApp({ Component, pageProps }) {
  return (
    <PortfolioProvider>
      <Component {...pageProps} />
    </PortfolioProvider>
  );
}

export default MyApp;

import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import { SnackbarProvider } from "notistack";
import BackToTop from "../components/BackToTop";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Navbar />
        <BackToTop href="" />
        <Component {...pageProps} />
        <Footer />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

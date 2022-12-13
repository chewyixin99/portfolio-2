import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SnackbarProvider maxSnack={1} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}>
        <Component {...pageProps} />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

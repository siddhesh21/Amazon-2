import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Provider as AuthProvider } from "next-auth/client";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default MyApp;

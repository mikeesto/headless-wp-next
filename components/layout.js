import Head from "next/head";
import Nav from "./nav";
import { globalStyles } from "./layout-style";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>wp-next</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap"
      />
    </Head>
    <Nav />
    {children}
    <style jsx>{globalStyles}</style>
  </>
);

export default Layout;

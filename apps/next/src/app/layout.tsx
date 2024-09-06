import { Inter } from "@next/font/google";

import { RootLayoutProps as Props } from "./types";
import Providers from "components/global/Providers/Providers";

import "../global.css";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = (props: Props) => {
  const { children, modals } = props;

  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          {modals}
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;

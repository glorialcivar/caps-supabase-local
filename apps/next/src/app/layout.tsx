import { Inter } from "@next/font/google";

import { RootLayoutProps as Props } from "./types";
import Providers from "components/global/Providers/Providers";
import { queryClient } from "config/query.server.config";
import "../global.css";
import { initServices } from "config/services.config";

initServices(queryClient);

const inter = Inter({ subsets: ["latin"] });

const RootLayout = (props: Props) => {
  const { children } = props;

  return (
    <html lang="es" className={inter.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;

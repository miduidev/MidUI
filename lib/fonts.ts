import { IBM_Plex_Mono, Inter, Poppins } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "400"],
  variable: "--font-ibm",
  display: "swap",
});

import Theme from "@/app/Theme/theme";
import NavBar from "./Components/Navbar/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Tarkhineh",
  description: "Tarkhineh is traditional resturant",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="rtl">
      <Theme>
        <body>
          <NavBar />
          {children}
        </body>
      </Theme>
    </html>
  );
}

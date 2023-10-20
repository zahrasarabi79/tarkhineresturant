import Theme from "@/app/Theme/theme";
import NavBar from "./Components/Navbar/NavBar";
import "./globals.css";

import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";

export const metadata: Metadata = {
  title: "Tarkhineh",
  description: "Tarkhineh is traditional resturant",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="rtl">
      <Theme>
        <body>
          {/* StyledComponentsRegistry for get style component and save in serverside(help to increse speed of firstload of site) */}
          <StyledComponentsRegistry>
            <NavBar />
            {children}
          </StyledComponentsRegistry>
        </body>
      </Theme>
    </html>
  );
}

"use client";

// Google fonts
import { Inter } from "next/font/google";

// React
import { useState, createContext } from "react";

// Project
import CustomBanner from "./components/CustomBanner";
import CustomHeader from "./components/CustomHeader";
import CustomFooter from "./components/CustomFooter";

// AntD
import { Layout } from "antd";
const { Header, Content } = Layout;
import { Footer } from "antd/es/layout/layout";
import Navbar from "./components/Navbar";

// Contexts
export const PageContext = createContext();

const inter = Inter({ subsets: ["latin"] });

// ! Metadata disabled: in production Vercel throws an error that it conflicts with "use client "
// export const metadata = {
//   title: "Sotla Laboratory Experts",
//   description:
//     "Manufacturers, distributors, and sellers of laboratory equipment & lab consumables",
// };

// Styling

// Used so that the content stretches throughout the page
const globalLayoutStyle = {
  minHeight: "100vh",
};

// Prevents black boxes appearing on the sides of the navbar
const headerStyle = {
  backgroundColor: "white",
};

export default function RootLayout({ children }) {
  const [page, setPage] = useState("home");

  return (
    <html lang="en">
      <PageContext.Provider value={{ page, setPage }}>
        <body className={inter.className}>
          <Layout style={globalLayoutStyle}>
            <CustomHeader />
            {/* Force-changed style, otherwise it leaves a black padding box on both sides of the navbar */}
            <Header style={headerStyle}>
              <Navbar />
            </Header>
            <CustomBanner bannerContent={""} />
            <Content>{children}</Content>
            <Footer>
              <CustomFooter />
            </Footer>
          </Layout>
        </body>
      </PageContext.Provider>
    </html>
  );
}

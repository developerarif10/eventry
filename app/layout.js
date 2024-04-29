import Navbar from "@/components/NavBar";
import { dbConnect } from "@/services/mongo";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers/authProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventry | Home",
  description: "Created by developerarif",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="py-8">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}

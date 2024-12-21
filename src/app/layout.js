import {  DM_Sans as DMSans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSans  = DMSans({
  weight: ['300','400', '500', '600', '700'], // You can specify the weights you need
  subsets: ['latin'], // Use the appropriate subset for your app
  variable: '--font-dm-sans', // Create a CSS variable to apply the font
});


export const metadata = {
  title: "SpoofSense",
  description: "Seamless Facial Liveness Detection in <1 Second",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${dmSans.variable} font-DM_Sans antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

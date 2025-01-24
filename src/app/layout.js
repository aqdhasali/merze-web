import { Poppins,Roboto } from "next/font/google";
import "./globals.css";

const poppins =  Poppins({
  subsets:["latin"],
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const roboto = Roboto({
  subsets:['latin'],
  weight:['400','500','700','900'],
})

export const metadata = {
  title: "The Super Slim & Secured MERZ Wallet",
  description: "Discover the sleek and secure MERZ wallet, designed for modern living. Featuring RFID blocking technology, this slim wallet offers ultimate protection and style. Shop now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

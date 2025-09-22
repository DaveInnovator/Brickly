import "./globals.css";
import CartProviderWrapper from "../component/CartProviderWrapper";

export const metadata = {
  title: "Brickly — Real Estate",
  description: "Buy, rent, or sell properties with ease",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* CartProviderWrapper must be a client component */}
        <CartProviderWrapper>
          {children}
        </CartProviderWrapper>
      </body>
    </html>
  );
}

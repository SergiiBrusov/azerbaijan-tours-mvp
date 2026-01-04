import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Azerbaijan Tours",
  description: "Best tours in Azerbaijan for Indian travelers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="flex-grow container mx-auto px-4 md:px-6">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

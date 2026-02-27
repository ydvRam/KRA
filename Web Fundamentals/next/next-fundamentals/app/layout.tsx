import "../app/globals.css";
import Navbar from "@/components/navbar";
export const metadata = {
  title: "Modern store",
  description: "Beautifull product showcase built with Next.js and Tailwind CSS ",
};
export default function Rootlayout({ children, }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-amber-400 text-gray-900 font-sans">
        <Navbar />
        <main className="min-h-screen px-6 py-10">
          {children}
        </main>
        <footer className="text-center py-6 text-gray-500 border-t-2">
          © 2026 Modern Store
        </footer>
      </body>
    </html>
  )
}
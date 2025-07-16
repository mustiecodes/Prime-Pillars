// app/(user)/layout.tsx
import "./globals.css";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex">
          <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

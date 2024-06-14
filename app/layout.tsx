import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-screen-sm pt-6 p-3">{children}</div>
      </body>
    </html>
  );
}

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-screen-sm p-3 pt-6">{children}</div>
      </body>
    </html>
  );
}

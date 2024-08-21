export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` bg-black antialiased`}>{children}</body>
    </html>
  );
}

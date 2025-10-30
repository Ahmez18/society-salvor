export const metadata = {
  title: "SocietySalvor",
  description: "Turn waste into worth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial", padding: 40 }}>
        {children}
      </body>
    </html>
  );
}

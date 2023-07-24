export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex p-3">
      <div className="flex-1">{children}</div>
    </main>
  );
}

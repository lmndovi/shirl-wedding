export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 h-screen w-full bg-floral-mobile bg-cover bg-center">
      <div className="flex-1">{children}</div>
    </div>
  );
}

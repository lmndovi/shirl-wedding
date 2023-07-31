export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 h-full w-full bg-floral-mobile bg-cover bg-center pb-20">
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex p-3 border-2 border-[#C4F6D1] rounded-xl mx-52 bg-[#529864]">
      <div className="flex-1">{children}</div>
    </main>
  );
}

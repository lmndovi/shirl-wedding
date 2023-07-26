import Form2 from "../components/Form2";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 h-full w-full bg-floral-mobile bg-cover bg-center md:text-center text-[#313638]">
      <div className="flex">
        <h1 className="mx-auto font text-lg font-semibold font-sans text-white">
          {children}
        </h1>
      </div>
      <div className="md:w-[1400px]">
        <Form2 />
      </div>
    </div>
  );
}

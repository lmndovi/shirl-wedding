import Form2 from "../components/Form2";
import MenuForm from "./MenuForm";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-col p-3">
      <div className="flex">
        <h1 className="mx-auto font text-lg font-semibold font-sans text-white">
          {children}
        </h1>
      </div>
      <div>
        <Form2 />
        {/* <MenuForm /> */}
      </div>
    </main>
  );
}

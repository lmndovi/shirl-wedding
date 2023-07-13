import Form2 from "../components/Form2";
import MenuForm from "./MenuForm";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex p-3">
      <div>
        <Form2 />
        {/* <MenuForm /> */}
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}

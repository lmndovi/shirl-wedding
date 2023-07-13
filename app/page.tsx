import { MrDeHaviland } from "@/fonts";

import Form from "./components/Form";

export default function Home() {
  return (
    <div className="flex flex-1 h-screen w-full bg-floral-mobile bg-cover bg-center">
      <main className="mx-auto text-center mt-24 space-y-5 text-[#313638]">
        <h1 className="uppercase font-medium text-5xl tracking-[18px]">
          Welcome
        </h1>
        <h4 className="uppercase tracking-[5px] text-sm">to the wedding of </h4>
        <h2 className="uppercase font-medium text-3xl tracking-[10px]">
          Shirley
        </h2>
        <div className="text-4xl tracking-[5px]">
          <h3 className={MrDeHaviland.className}>and</h3>
        </div>

        <h2 className="uppercase font-medium text-3xl tracking-[10px]">
          Andrew
        </h2>
        <h5 className="uppercase tracking-[4px]">
          13.04.2024 &#x2022; Chigwell
        </h5>
        <div>{/* <Form /> */}</div>
      </main>
    </div>
  );
}

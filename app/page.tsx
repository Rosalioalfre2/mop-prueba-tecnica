import Bienvenida from "@/app/sections/main/bienvenida";
import TalentoHumano from "@/app/sections/main/tantoHumano";
import Testimonios from "@/app/sections/main/testimonios";
import { HR } from "flowbite-react/components/HR";

export default function Home() {
  return (
    <main className="flex flex-col px-4 py-8 items-center justify-start gap-4">
      {/* <h1 className="text-2xl font-bold dark:text-white text-black w-full text-center">Landing Page</h1> */}
      <Bienvenida />
      <HR className="w-full border-b-2 border-gray-300 dark:border-gray-500 my-4" />
      <TalentoHumano />
      <HR className="w-full border-b-2 border-gray-300 dark:border-gray-500 my-4" />
      <Testimonios />
    </main>
  );
}

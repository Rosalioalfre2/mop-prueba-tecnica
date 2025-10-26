import Bienvenida from "@/app/sections/main/bienvenida";

export default function Home() {
  return (
    <main className="flex flex-col px-4 py-8 items-start justify-start gap-4">
      {/* <h1 className="text-2xl font-bold dark:text-white text-black w-full text-center">Landing Page</h1> */}
      <Bienvenida />
    </main>
  );
}

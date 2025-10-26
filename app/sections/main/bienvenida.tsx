import Image from "next/image";

const BienvenidaSection = () => {
  return (
    <section className="relative w-full mx-auto overflow-hidden max-w-6xl rounded-xl">
      <div className="relative w-full aspect-video">
        <Image
          src="/Imagen1.jpg"
          alt="Imagen de bienvenida"
          fill
          className="object-cover object-center rounded-t-xl"
          priority
        />
      </div>
      <div className="bottom-4 left-4 bg-gray-400 dark:bg-slate-900 bg-opacity-50 text-slate-900 dark:text-white px-4 py-2 rounded-b-lg">
        <h2 className="text-2xl font-bold">Bienvenido</h2>
      </div>
    </section>
  );
};

export default BienvenidaSection;

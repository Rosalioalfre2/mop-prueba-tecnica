"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import TalentoHumanoCard from "@/app/components/main/talentoHumano/card";
import TalentoHumanoMap from "@/app/components/main/talentoHumano/map";
import { talentoHumanoURL } from "@/app/const/urls";

const TalentoHumanoSection = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    try {
      const response = await axios.get(talentoHumanoURL);
      setData(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Error al obtener los datos de Talento Humano.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center gap-2">
        <Spinner /> Cargando...
      </div>
    );

  if (error)
    return (
      <Alert color="failure" icon={HiInformationCircle}>
        <span className="font-medium">Alerta!</span> {error}
      </Alert>
    );

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <h2 className="text-4xl font-bold dark:text-white text-black w-full text-center mt-4">
        Talento Humano
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((item) => (
          <TalentoHumanoCard key={item.id} {...item} />
        ))}
      </div>

      <TalentoHumanoMap data={data} />
    </div>
  );
};

export default TalentoHumanoSection;

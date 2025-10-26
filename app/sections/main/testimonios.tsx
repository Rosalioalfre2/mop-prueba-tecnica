"use client";

import Card from "@/app/components/main/testimonios/card";
import { testimonialsURL } from "@/app/const/urls";
import axios from "axios";
import { Alert, HR, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiInformationCircle } from "react-icons/hi2";

const TestimoniosSection = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);

    const getData = async () => {
        try {
            const response = await axios.get(testimonialsURL);

            const shuffledData = response.data.sort(() => 0.5 - Math.random());
            const selectedData = shuffledData.slice(0, 5);
            setData(selectedData);
        } catch (err) {
            console.error("Error fetching data:", err);
            setError("Error al obtener los testimonios.");
        } finally {
            setLoading(false);
        }
    }

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

    return (<div className="w-full flex flex-col items-center justify-center  px-2 md:px-6 lg:px-10 xl:px-12">
        <h2 className="text-4xl font-bold dark:text-white text-black w-full text-center my-4">Testimonios</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.map((testimonio: any) => (
                <Card key={testimonio.id} title={testimonio.title} body={testimonio.body} />
            ))}
        </div>
    </div>);
}

export default TestimoniosSection;
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

// 🔹 Cargar react-leaflet dinámicamente (sin SSR)
const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(m => m.Popup), { ssr: false });

const TalentoHumanoMap = ({ data }: { data: any[] }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    (async () => {
      const L = await import("leaflet");
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/marker-icon-2x.png",
        iconUrl: "/leaflet/marker-icon.png",
        shadowUrl: "/leaflet/marker-shadow.png",
      });
    })();
  }, [mounted]);

  // 🔹 Esperar a que el cliente esté listo antes de renderizar el mapa
  if (!mounted) return null;

  const position: [number, number] = [13.6929, -89.2182]; // San Salvador

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden mt-6">
      <MapContainer
        center={position}
        zoom={6}
        scrollWheelZoom={false}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((item: any) => (
          <Marker
            key={item.id}
            position={[
              parseFloat(item.address.geo.lat),
              parseFloat(item.address.geo.lng),
            ]}
          >
            <Popup>
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.username}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default TalentoHumanoMap;

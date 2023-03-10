import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css' 

interface Coordenada {
  lat: number;
  lng: number;
}

export function MapaFortaleza() {
  const position = [-3.7327, -38.5267]; // coordenadas do centro de Fortaleza

  const coordenadas: Coordenada[] = [
    { lat: -3.754215, lng: -38.547869 }, // Praia do Futuro
    { lat: -3.725504, lng: -38.533207 }, // Centro Dragão do Mar de Arte e Cultura
    { lat: -3.747674, lng: -38.481213 }, // Beach Park
    { lat: -3.789543, lng: -38.478949 }, // Praia de Cumbuco
    { lat: -3.780832, lng: -38.651439 }, // Parque do Cocó
  ];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>Fortaleza</Popup>
      </Marker>
      {coordenadas.map((coordenada, index) => (
        <Marker key={index} position={[coordenada.lat, coordenada.lng]}>
          <Popup>Marker {index + 1}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

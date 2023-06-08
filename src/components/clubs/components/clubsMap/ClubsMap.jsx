import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

function SetViewOnClick({ coord }) {
    const map = useMap();
    map.setView(coord, map.getMaxZoom())
    return null;
}

const ClubsMap = ({ coord }) => {

    return (

        <MapContainer className="map" zoom={20} scrollWheelZoom={false} center={coord}>

            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={coord}>

            </Marker>

            <SetViewOnClick coord={coord} />

        </MapContainer>
    )
}

export default ClubsMap;
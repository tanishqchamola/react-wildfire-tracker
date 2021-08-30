import { useState } from "react";

import GoogleMapReact from "google-map-react";
import WildfireMarker from "./WildfireMarker";
import VolcanoMarker from "./VolcanoMarker";
import LocationInfo from "./LocationInfo";

require("dotenv").config();

const Map = ({ eventData, center, zoom }) => {
	const WILDFIRE = 8;
	const VOLCANO = 12;

	const [locationInfo, setLocationInfo] = useState(null);

	const markers = eventData.map((ev) => {
		if (ev.categories[0].id === WILDFIRE) {
			const coordinates = ev.geometries[0].coordinates;
			return <WildfireMarker lat={coordinates[1]} lng={coordinates[0]} key={ev.id} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />;
		} else if (ev.categories[0].id === VOLCANO) {
			const coordinates = ev.geometries[0].coordinates;
			if (coordinates.length !== 2) return null;
			return <VolcanoMarker lat={coordinates[1]} lng={coordinates[0]} key={ev.id} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />;
		}
		return null;
	});

	return (
		<div className="map">
			<GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }} defaultCenter={center} defaultZoom={zoom}>
				<WildfireMarker lat={center.lat} lng={center.lng} />
				{markers}
			</GoogleMapReact>
			{locationInfo && <LocationInfo info={locationInfo} />}
		</div>
	);
};

Map.defaultProps = {
	center: {
		lat: 48.778,
		lng: -114.431,
	},
	zoom: 5,
};

export default Map;

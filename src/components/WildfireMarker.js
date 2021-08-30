import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-emojione/fire";

const WildfireMarker = ({ lat, lng, onClick }) => {
	return (
		<div className="location-marker" onClick={onClick}>
			<Icon icon={locationIcon} className="location-icon" />
		</div>
	);
};

export default WildfireMarker;

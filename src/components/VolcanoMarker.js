import { Icon } from "@iconify/react";
import volcanoIcon from "@iconify/icons-emojione/volcano";

const WildfireMarker = ({ lat, lng, onClick }) => {
	return (
		<div className="location-marker" onClick={onClick}>
			<Icon icon={volcanoIcon} className="location-icon" />
		</div>
	);
};

export default WildfireMarker;

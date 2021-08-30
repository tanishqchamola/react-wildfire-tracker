const LocationInfo = ({ info }) => {
	return (
		<div className="location-info">
			<h2>Event Location Info:</h2>
			<ul>
				<li>
					<strong>ID: </strong>
					{info.id}
				</li>
				<li>
					<strong>TITLE: </strong>
					{info.title}
				</li>
			</ul>
		</div>
	);
};

export default LocationInfo;

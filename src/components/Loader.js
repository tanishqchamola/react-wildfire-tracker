import Spinner from "../assets/loader.gif";

const Loader = () => {
	return (
		<div className="loader">
			<img src={Spinner} alt="Loader" />
			<h2>Fetching data...</h2>
		</div>
	);
};

export default Loader;

import React from "react";

function SecondsCounter() {
	const [counter, setCounter] = React.useState(1);
	React.useEffect(() => {
		const timer = counter > 0 && setInterval(() => setCounter(counter + 1), 1000);
		return () => clearInterval(timer);
	}, [counter]);

	return (
		<>
			<div className="alert bg-dark bg-gradient text-white m-3 mx-auto w-50 d-flex justify-content-end">
					<div className="display-5 box d-flex justify-content-center align-items-center"><i class="fa-regular fa-clock"></i></div>
					<div className="display-5 mx-4 box d-flex justify-content-center align-items-center"> {counter}</div>
			</div>
		</>
	);
}


export default SecondsCounter

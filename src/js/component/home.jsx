import React, { useEffect } from "react";

function SecondsCounter() {
	const [counter, setCounter] = React.useState(1);
	React.useEffect(() => {
	const timer = counter > 0 && setInterval(() => setCounter(counter + 1), 1000);
	return () => clearInterval(timer);
	},);
	[counter]

	const first = Math.floor(counter / 1) % 10;
	const second = Math.floor(counter / 10) % 10;
	const third = Math.floor(counter / 100) % 10;
	const fourth = Math.floor(counter / 1000) % 10;
	const fifth = Math.floor(counter / 10000) % 10;
	const sixth = Math.floor(counter / 100000) % 10;

	return (
		<>
			<div className="alert bg-dark bg-gradient text-white m-3 mx-auto w-50 d-flex justify-content-end">
				<div className="display-5 box d-flex justify-content-center align-items-center"><i class="fa-regular fa-clock"></i></div>
				<div className="display-5 mx-4 box d-flex justify-content-center align-items-center"> {sixth}</div>
				<div className="display-5 mx-4 box d-flex justify-content-center align-items-center">{fifth} </div>
				<div className="display-5 mx-4 box d-flex justify-content-center align-items-center">{fourth} </div>
				<div className="display-5 mx-4 box d-flex justify-content-center align-items-center"> {third}</div>
				<div className="display-5 mx-4 box d-flex justify-content-center align-items-center"> {second}</div>
				<div className="display-5 mx-4 box d-flex justify-content-center align-items-center"> {first}</div>
			</div>
		</>
	);
}


export default SecondsCounter
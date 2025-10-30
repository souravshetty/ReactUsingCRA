import { useState } from "react";
function Temperature() {
	const [celsius, setCelcius] = useState("");

	return (
		<div>
			<input
				value={celsius}
				type="number"
				onChange={(e) => setCelcius(e.target.value)}
			/>
			<p>Fahrenheit: {celsius !== "" ? (celsius * 9) / 5 + 32 : ""}</p>
		</div>
	);
}
export default Temperature;
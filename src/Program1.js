import { useState, useEffect } from "react";

function Program1() {
	const [numbers, setNumbers] = useState({ num1: 0, num2: 0 });
	const [input, setInput] = useState("");
	const [correctAnswer, setCorrectAnswer] = useState(null);

	const generateNumbers = () => {
		const num1 = Math.floor(Math.random() * 50);
		const num2 = Math.floor(Math.random() * 50);
		setNumbers({ num1, num2 });
	};

	const checkAnswer = () => {
		setCorrectAnswer(numbers.num1 + numbers.num2);
	};

	return (
		<div style={{ padding: "20px", fontFamily: "Arial" }}>
			<h2>Guess the Sum</h2>

			<div style={{ marginBottom: "10px" }}>
				<p>
					What is {numbers.num1} + {numbers.num2} ?
				</p>

				<input
					type="number"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Enter your guess"
				/>

				<div style={{ marginTop: "10px" }}>
					<button onClick={generateNumbers}>Generate</button>
					<button onClick={checkAnswer} style={{ marginLeft: "10px" }}>
						Guess
					</button>
				</div>
			</div>

			<Result answer={correctAnswer} input={input} />
		</div>
	);
}

function Result({ answer, input }) {
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (answer === null) {
			setMessage("");
			return;
		}

		const correct = answer === parseInt(input);
		setMessage(correct ? " You guessed right!" : " Try Again!");
	}, [answer, input]);

	return <h3>{message}</h3>;
}

export default Program1;

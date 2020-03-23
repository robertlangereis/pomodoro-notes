import * as React from 'react';
import { useState } from 'react';

const Timer = () => {
	// let [hours, setHours] = useState(0);
	// let [minutes, setMinutes] = useState(30);
	let [seconds, setSeconds] = useState(1500);
	let remainderSeconds = Math.floor(seconds % 60);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	let [timerRunning, setTimerRunning] = useState(false);
	// let countdown = 0;

	// function getTimeRemaining(endtime) {
	// setSeconds(seconds --);
	// setMinutes(Math.floor((endtime / 1000 / 60) % 60));
	// setHours(Math.floor((endtime / (1000 * 60 * 60)) % 24));
	// 	return {
	//         total: total,
	// 		hours: hours,
	// 		minutes: minutes,
	// 		seconds: seconds
	// 	};
	// }

	function startTimer() {
		setTimerRunning(!timerRunning);
		const timeinterval = setInterval(function() {
			if (seconds >= 0 && timerRunning === true) setSeconds(seconds--);
			else clearInterval(timeinterval);
		}, 1000);
	}

	// const runTimer = () =>
	// 	setInterval(() => {
	// 		setTimer(timer--);
	// 	}, 1000);
	return (
		<React.Fragment>
			<div>{`${hours ? hours >= 1 : '0'} :`}</div>
			<div>{`${minutes} :`}</div>
			<div>
				{remainderSeconds < 10 ? '0' : ''}
				{remainderSeconds}
			</div>
			<button onClick={() => startTimer()}>CLICK TO START</button>;
			<input onChange={e => setSeconds(e.target.value * 60)} type='text' />
		</React.Fragment>
	);
};

export default Timer;

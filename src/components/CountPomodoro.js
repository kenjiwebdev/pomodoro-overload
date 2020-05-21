import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

//Allows user to visually see  how many Pomodoro they have done.
function CountPomodoro(props) {
	let spinner = <Spinner animation="grow" />
	let spinnerArr = [];

	function showPomdoroCount(num) {
		for (let i = 0; i < num; i++) {
			spinnerArr.push(spinner);
		}
		return spinnerArr;
	}
	
	return (
		<div key={props.count}
		onDoubleClick={props.restartCount}
		style={{ 
			backgroundColor: 'grey',
			width: '150px',
			height: '35px',
			margin: 'auto',
			marginBottom: '10px',
			border: '2px solid black'
		}}>
			{showPomdoroCount(props.count)}
		</div>
	)
}

export default CountPomodoro;
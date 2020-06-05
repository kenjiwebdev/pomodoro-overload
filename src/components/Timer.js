import React from 'react';
import Countdown from 'react-countdown';
import UIfx from 'uifx'; 
import tickAudio from '../audio/switch.mp3';

//Contains Pomodoro countdown timer and the sound effects of the timer. Kept as a child component for less code to the main component
const tick = new UIfx(
	tickAudio, 
	{
		volume: 1,
		throttleMs: 40
	}
	);


class Timer extends React.Component {

	playAudio = () => {
		tick.play(0.3)
	}
	
	render() {
		return (
			<div className="timer">
				 <Countdown 
				 key={this.props.date}
				 ref={this.props.myRef} 
				 date={this.props.date} 
				 daysInHours={true}
				 autoStart={false}
				 onTick={this.playAudio}
				 onComplete={this.props.completedPomdoro}
				 />
			</div>	
		)
	}
} 

export default Timer;
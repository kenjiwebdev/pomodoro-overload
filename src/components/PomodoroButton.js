import React from 'react';
import Button from 'react-bootstrap/Button'

//All important button element in a single child component so that the parent component has less code.
class PomodoroButton extends React.Component {
	render() {
		return (
			<div>
				{ !this.props.pomodoroRunning && !this.props.onBreak &&
					<Button className="pomodoro-btns" size="lg" onClick={this.props.startPomdoro} 
					variant="secondary">Start Pomodoro </Button>}
				{ this.props.pomodoroRunning &&
					<Button className="pomodoro-btns" size="lg" onClick={this.props.cancelPomodoro}
					variant="secondary">Cancel Pomodoro </Button>}
				{ !this.props.pomodoroRunning && this.props.onBreak 
					&& !this.props.pomodoroCompleted &&
					<Button className="pomodoro-btns" size="lg"onClick={this.props.shortBreakPomdoro}
					variant="secondary">Short Break </Button>
				}
				{ !this.props.pomodoroRunning && this.props.pomodoroCompleted &&
					<Button className="pomodoro-btns" size="lg" onClick={this.props.longBreakPomdoro}
					variant="secondary">Long Break </Button>
				}
			</div>	
		)
	}
} 



export default PomodoroButton;
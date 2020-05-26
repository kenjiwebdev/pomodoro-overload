import React from 'react';
import Header from './components/Header';
import BackgroundColor from './components/BackgroundColor';
import PomodoroButton from './components/PomodoroButton';
import TaskCard from './components/TaskCard';
import Timer from './components/Timer';
import CountPomodoro from './components/CountPomodoro';
import { Container, Row, Col } from 'react-bootstrap';

/*
Main App Pomodoro Component, 
Handles all the state, functionality and core logic to run Pomodoro.
*/

//TODO: Make the Pomdoro countdown time editable.
class App extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	   	this.start = this.start.bind(this);
		this.state = {
			count: 0,
			pomodoroRunning: false,
			pomodoroCompleted: false,
			onBreak: false,
			date: Date.now() + 1.5e+6,
		}
	}
	
	start() {
		this.myRef.current.start();
	}

	pause() {
		this.myRef.current.pause();
	}

	isCompleted() {
		this.myRef.current.isCompleted();

	}

	startPomdoro = () => {
		this.setState({pomodoroRunning: true});
		this.myRef.current.start();
	}

	cancelPomodoro = () => {
		if (this.state.count === 4) {
			this.setState({count: 0});
			this.setState({pomodoroCompleted: false});
			this.setState({pomodoroRunning: false});
			this.setState({onBreak: false});
			this.myRef.current.pause();
			this.setState({date: Date.now() + 1.5e+6});
		} else {
			this.setState({pomodoroRunning: false});
			this.setState({onBreak: false});
			this.myRef.current.pause();
			this.setState({date: Date.now() + 1.5e+6});
		}
	}

	completedPomdoro = () => {
		if (this.state.count === 3 && !this.state.onBreak) {
			this.setState({pomodoroRunning: false});
			this.setState({onBreak: true});
			this.setState({count: this.state.count + 1});
			this.setState({pomodoroCompleted: true});
			this.setState({date: Date.now() + 900000});
		} else if (this.state.count === 4) {
			this.setState({pomodoroRunning: false});
			this.setState({onBreak: false});
			this.setState({count: 0});
			this.setState({pomodoroCompleted: false});
			this.setState({date: Date.now() + 1.5e+6});
		} else if (!this.state.onBreak) {
			this.setState({pomodoroRunning: false});
			this.setState({onBreak: true});
			this.setState({count: this.state.count + 1});
			this.setState({date: Date.now() + 300000});
		} else {
			this.setState({pomodoroRunning: false});
			this.setState({date: Date.now() + 1.5e+6});
			this.setState({onBreak: false});
		}
	}

	shortBreakPomdoro = () => {
		this.setState({pomodoroRunning: true});
		this.myRef.current.start();
	}

	longBreakPomdoro = () => {
		this.setState({pomodoroRunning: true});
		this.myRef.current.start();
	}

	restartCount = () => {
		alert("Pomdoro is reset!")
		this.setState({count: 0});
		this.cancelPomodoro();
	}

	render() {
		return (
			<Container className="text-center">
				<Row>
					<Col>
						<Header />
						<BackgroundColor />
						<TaskCard />
						<CountPomodoro 
						count={this.state.count}
						restartCount={this.restartCount}
						/>
						<Timer 
						completedPomdoro={this.completedPomdoro}
						myRef={this.myRef}
						date={this.state.date}
						/>
						<PomodoroButton 
						pomodoroRunning={this.state.pomodoroRunning}
						pomodoroCompleted={this.state.pomodoroCompleted}
						startPomdoro={this.startPomdoro}
						cancelPomodoro={this.cancelPomodoro}
						shortBreakPomdoro={this.shortBreakPomdoro}
						longBreakPomdoro={this.longBreakPomdoro}
						onBreak={this.state.onBreak}
						/>
					</Col>
				</Row>
			</Container>
		)
	}
} 

export default App;
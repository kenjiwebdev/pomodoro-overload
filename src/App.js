import React from 'react';
import Header from './components/Header';
import BackgroundColor from './components/BackgroundColor';
import PomodoroButton from './components/PomodoroButton';
import TaskCard from './components/TaskCard';
import Timer from './components/Timer';
import SetTimer from './components/SetTimer';
import PomodoroStatistics from './components/PomodoroStatistics';
import CountPomodoro from './components/CountPomodoro';
import { Container, Row, Col } from 'react-bootstrap';
import ls from 'local-storage'

/*
Main App Pomodoro Component, 
Handles all the state, functionality and core logic to run the Pomodoro.
*/

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
			mainTimer: 1.5e+6,
			shortTimer: 300000,
			longTimer: 900000,
			taskArr: [],
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
			this.setState({date: Date.now() + this.state.mainTimer});
		} else {
			this.setState({pomodoroRunning: false});
			this.setState({onBreak: false});
			this.myRef.current.pause();
			this.setState({date: Date.now() + this.state.mainTimer});
		}
	}

	completedPomdoro = () => {
		if (this.state.count === 3 && !this.state.onBreak) {
			this.setState({pomodoroRunning: false});
			this.setState({onBreak: true});
			this.setState({count: this.state.count + 1});
			this.setState({pomodoroCompleted: true});
			this.setState({date: Date.now() + this.state.longTimer});
			this.updateLocalCountStorage();
		} else if (this.state.count === 4) {
			this.setState({pomodoroRunning: false});
			this.setState({onBreak: false});
			this.setState({count: 0});
			this.setState({pomodoroCompleted: false});
			this.setState({date: Date.now() + this.state.mainTimer});
		} else if (!this.state.onBreak) {
			this.setState({pomodoroRunning: false});
			this.setState({onBreak: true});
			this.setState({count: this.state.count + 1});
			this.setState({date: Date.now() + this.state.shortTimer});
			this.updateLocalCountStorage();
		} else {
			this.setState({pomodoroRunning: false});
			this.setState({date: Date.now() + this.state.mainTimer});
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

	editTimer = (num1, num2, num3) => {	
		this.setState({mainTimer: num1});
		this.setState({shortTimer: num2});
		this.setState({longTimer: num3});
		alert("Settings changed!");
		this.setState({count: 0});
		this.cancelPomodoro();
	}

	editTimerDefault = () => {
		this.setState({mainTimer: 1.5e+6});
		this.setState({shortTimer: 300000});
		this.setState({longTimer: 900000});
		alert("Settings are change to default!");
		this.setState({count: 0});
		this.cancelPomodoro();
	}

	resetLocalStorage = () => {
		var ls = require('local-storage');
		this.setState({taskArr: []});
		ls.clear();
		ls("pomodoroCount", 0);
	}

	updateLocalCountStorage = () => {
		let tempNum = ls.get("pomodoroCount");
		tempNum++
		ls.set("pomodoroCount", tempNum);
	}

	addTaskArr = (task) => {
		this.state.taskArr.push(task);
	}

	render() {
		return (
			<div>
			<Container className="text-center">
				<Row>
					<Col>
						<Header />
						<BackgroundColor />
						<TaskCard 
						addTaskArr={this.addTaskArr}
						taskArr={this.state.taskArr}
						/>
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
			<SetTimer 
			editTimer={this.editTimer}
			editTimerDefault={this.editTimerDefault}
			/>
			<PomodoroStatistics 
			resetLocalStorage={this.resetLocalStorage}
			/>
			</div>
		)
	}
} 

export default App;
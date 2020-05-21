import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// Task Card Component handles the logic on how to change and edit the user Pomodoro task card.
class TaskCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			task: "Focus is the Key.",
			defaultTask: true,
			textValue: '',
		}
	}

	editTask = () => {
		this.setState({defaultTask: false})
	}

	handleChange = (event) => {    
		this.setState({textValue: event.target.value});  
	}

	changeTask = () => {
		if (this.state.textValue === "") {
			this.setState({task: "Focus is the Key."});  
			this.setState({defaultTask: true})
			this.setState({textValue: ''});  
		} else {
			this.setState({task: this.state.textValue})
			this.setState({defaultTask: true})
			this.setState({textValue: ''});  
		}
	}

	render() {
	return (
		<Card
			 className="bg-dark text-white card-task"
			 style={{ width: '20rem' }}	
		>
			<Card.Header>Task:</Card.Header>
			<Card.Body>
			<Card.Text>
      			{this.state.task}
   			</Card.Text>
   			<form>
   				{!this.state.defaultTask && 
   					<textarea 
   					value={this.state.textValue} 
   					onChange={this.handleChange}
   					style={{ marginBottom: '15px' }}/>
   				}

   				{!this.state.defaultTask
   					? <Button variant="light" onClick={this.changeTask}>Change</Button> 
   					: <Button variant="light" onClick={this.editTask}>Edit Task</Button>
   				}
			</form>
			</Card.Body>
		</Card>
		)
	}
}




export default TaskCard;
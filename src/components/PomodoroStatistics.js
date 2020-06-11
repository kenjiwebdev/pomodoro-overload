import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class PomodoroStatistics extends React.Component {
  
  constructor(props) {
  	super(props);
  	this.state = {
		pomodoroHowMany: 0,
		CompletedTask: "",
		}
  }


  render() {
    return (
    	<div>
    	 <Button 
		  className="stats-btn" 
		  variant="outline-dark" 
		  size="sm"
		  >
		  Stats
		  </Button>

		 
		</div>
    	)
  }
}














export default PomodoroStatistics;
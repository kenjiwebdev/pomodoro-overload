import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ls from 'local-storage'

//Insert useful comments

function PomodoroStatistics (props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

  const handleClear = () => {
    handleClose();
    props.resetLocalStorage();
  }

  const displayPomodoroTask = () => {
    const localTaskArr = ls.get("pomodoroTasks");
    if (localTaskArr === null) {
      return <li>Focus is the key!</li>
    } else {
      const taskArrList = localTaskArr.map((task) =>
      <li>{task}</li>
      );
      return taskArrList
    }
  }

  const displayPomodoroCount = () => {
    if (ls.get("pomodoroCount") === null) {
      return `Total Pomdoro: 0` 
    } else {
      return `Total Pomdoro: ${ls.get("pomodoroCount")}`
    }
  }

    return (
    	<div>
    	 <Button 
		  className="stats-btn" 
		  variant="outline-dark" 
		  size="sm"
		  onClick={handleShow}
		  >
		  Stats
		  </Button>

		 <Modal show={show} onHide={handleClose} size="sm" centered>
         	<Modal.Header closeButton>
          		<Modal.Title>Pomodoro Stats</Modal.Title>
        	</Modal.Header>

        	<Modal.Body>
          Pomodoro Tasks:
          <ul className="pomodoro-list-task">
          {displayPomodoroTask()}
          </ul>
          <br/>
        	{displayPomodoroCount()}
        	</Modal.Body>

        	<Modal.Footer>
        	<Button variant="secondary" onClick={handleClear}>
            Clear
          	</Button>
          	</Modal.Footer>
      	 </Modal>
		 
		</div>
    	)
}

export default PomodoroStatistics;
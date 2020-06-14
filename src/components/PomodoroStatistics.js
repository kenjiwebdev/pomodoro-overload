import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ls from 'local-storage'

function PomodoroStatistics (props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

  const handleClear = () => {
    handleClose();
    props.resetLocalStorage();
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
        	{`Total Pomdoro: ${ls.get("pomodoroCount")}`}
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
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PomodoroStatistics (props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
        	Woohoo, you're reading this text in a modal!
        	</Modal.Body>
      	 </Modal>
		 
		</div>
    	)
}














export default PomodoroStatistics;
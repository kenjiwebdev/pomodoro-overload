import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputNumber from 'react-input-number';

/*

*/
function SetTimer(props) {
	  const [show, setShow] = React.useState(false);
	  const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

    const [num1, setNum1] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const [num3, setNum3] = React.useState(0);

    const handleCloseEdit = () => {
      setShow(false);
      props.editTimer(num1, num2, num3);
    }

    const handleCloseDefault = () => {
      setShow(false);
      props.editTimerDefault();
    }

	return (
		<div>
		  <Button 
		  className="setting-btn" 
		  variant="outline-dark" 
		  size="sm"
		  onClick={handleShow}
		  >
		  Settings
		  </Button>

		  <Modal show={show} onHide={handleClose}>
        	<Modal.Header closeButton>
          	<Modal.Title>Pomodoro Timer Settings</Modal.Title>
        	</Modal.Header>
        	<Modal.Body>
        	<p>Main Timer:</p>
        		 <InputNumber value={num1} onChange={setNum1}/>
        	</Modal.Body>
        	<Modal.Body>
        	<p>Short Break Timer:</p>
        		 <InputNumber value={num2} onChange={setNum2}/>
        	</Modal.Body>
        	<Modal.Body>
        	<p>Long Break Timer:</p>
        		 <InputNumber value={num3} onChange={setNum3}/>
        	</Modal.Body>
       		<Modal.Footer>
          	<Button variant="secondary" onClick={handleCloseDefault}>
            Default Settings
          	</Button>
          	<Button variant="primary" onClick={handleCloseEdit}>
            Save Changes
         	</Button>
       	 	</Modal.Footer>
     	 </Modal>
		</div>
	)
}

export default SetTimer;
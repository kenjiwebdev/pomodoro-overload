import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputNumber from 'react-input-number';

/*
Set Timer component for more customization, allows the user to edit/change the
default countdown timer of Pomodoro for there liking.
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

      if (checkInputIsNum(num1, num2, num3)) {
        const arrSetting = convertToMillisecond(num1, num2, num3)
        console.log(arrSetting)
        props.editTimer(...arrSetting);
      } else {
          alert("Enter a valid number");
          props.editTimerDefault();
      }
    }

    const handleCloseDefault = () => {
      setShow(false);
      props.editTimerDefault();
    }

    const checkInputIsNum = (...numArr) => {
    	if (numArr.every(curr => typeof curr === "number")) {
    		if (numArr.every(curr => curr > 0 && curr < 101)) {
    			return true;
    		}
    	} 
    	return false;
    }

    const convertToMillisecond = (...numArr) => {
      const mapArr = numArr.map(num => num * 60000);
      return mapArr;
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
          <h5>Enter how many minutes:</h5>
          <br/>
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
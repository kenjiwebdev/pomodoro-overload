import React from 'react';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

/*
Header Component handles the main header title and Pomodoro tooltip. 
The tooltip allows users to have a quick info on Pomodoro technique.
*/
const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3"><strong>What is Pomodoro Technique?</strong></Popover.Title>
    <Popover.Content 
    style={{ fontSize: '1.1rem'}}>
      The Pomodoro Technique is a time management system that encourages people to work with 
      the time they have rather than against it. You break your workday into
      25-minute chunks separated by five-minute breaks. 
      After about four pomodoros, you take a longer break of about 15 minutes.
    </Popover.Content>
  </Popover>
);

function Header() {
	return (
		<OverlayTrigger 
    trigger={["hover", "focus"]} 
    placement="bottom" 
    overlay={popover}
    >
			<h1>Pomodoro Overload</h1>
		</OverlayTrigger>
		)
}

export default Header;

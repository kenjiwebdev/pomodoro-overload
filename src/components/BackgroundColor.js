import React from 'react';
import { GithubPicker } from 'react-color';

//Handles the logic of changing the background color, allows the user to choose his prefer background color.
class BackgroundColor extends React.Component {
  state = {
  	background: '#FF0000'
  };

  handleChangeComplete = (color) => {
  	this.setState({ background: color.hex});
    document.body.style.backgroundColor = this.state.background;
  };
  
  render() {
    return (
      <div className="bg-comp">
    	<GithubPicker 
    	 color={ this.state.background }
    	 onChangeComplete={ this.handleChangeComplete }
    	/>
      </div>
    	)
  }
}






export default BackgroundColor;
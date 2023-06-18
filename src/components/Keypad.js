import React from 'react';

class Keypad extends React.Component {
  render() {
    return (
      <div>
        <input type="password" onChange={this.handleChange} />
      </div>
    );
  }

  handleChange = (event) => {
    console.log('Entering password...');
    // Additional logic can be added here to handle the input value
  };
}

export default Keypad;

import React from 'react';

class EyesOnMe extends React.Component {
  render() {
    return (
      <div>
        <button onFocus={this.handleFocus} onBlur={this.handleBlur}>
          Eyes on me
        </button>
      </div>
    );
  }

  handleFocus = () => {
    console.log('Good!');
    // Additional logic can be added here
  };

  handleBlur = () => {
    console.log('Hey! Eyes on me!');
    // Additional logic can be added here
  };
}

export default EyesOnMe;

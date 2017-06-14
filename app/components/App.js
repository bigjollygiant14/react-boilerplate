import React from 'react';
import { PropTypes } from 'prop-types';

export class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    console.log(this.props);
    return (
      <div className="BoilerPlateRoot">
        <div className="app-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

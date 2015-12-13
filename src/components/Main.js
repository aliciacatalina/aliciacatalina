require('normalize.css');
require('styles/App.css');
let data = require('../helpers/data.json');

import React from 'react';
import HeroComponent from '../components/src/components/HeroComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <HeroComponent data={data}/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

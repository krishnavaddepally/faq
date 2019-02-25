import React from 'react';
import QAContainer from './qacontainer.js';

	class App extends React.Component {
	  constructor(props){
	    super(props)
	    this.state={
	      data: this.props.data
	    }
	  }

	  render() {
	    return(
	      <div className= 'text-center'>
	        <h1>We are Here to Help</h1>
	        <QAContainer data={this.state.data}/>
	      </div>
	    )
	  }
	}

	export default App;

import React from 'react';

	class QATile extends React.Component {
	  constructor(props){
	    super(props)
	    this.state={
	    }
	  }

	  render() {
	    let answer
	    let icon
	    if(this.props.selectedId==this.props.id){
	      answer=<p>{this.props.answer}</p>
	      icon= 'fa-minus-square clicked'
	    }else{
	      answer=null
	      icon='fa-plus-square'
	    }

	    return(
	      <div className= "question">
	        <span className="q" onClick= {this.props.handleClick}><i className={'fas ' + icon}></i>  +  {this.props.question}</span>
	        {answer}
	      </div>
	    )
	  }
	}

	export default QATile;

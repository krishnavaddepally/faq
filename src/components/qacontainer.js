import React from 'react';
	import QATile from './qatile.js'

	class QAContainer extends React.Component {
	  constructor(props){
	    super(props)
	    this.state={
	      selectedId: null
	    }
	    this.selectClick = this.selectClick.bind(this)
	  }
	  selectClick(newSelectionId){
	    if(newSelectionId === this.state.selectedId){
	      this.setState({selectedId: null})
	    }else{
	      this.setState({selectedId: newSelectionId})
	    }
	  }

	  render() {
	    let tile = this.props.data.map(question=>{
	      let handleClick = () =>{
	        this.selectClick(question.id)
	      }
	      return(
	        <QATile
	          key={question.id}
	          id={question.id}
	          selectedId={this.state.selectedId}
	          question={question.question}
	          answer={question.answer}
	          handleClick={handleClick}
	          />
	      )
	    })
	    return(
	      <div className = 'small-8 row small-centered qa-container'>
	        <p>QA Container</p>
	        {tile}
	      </div>
	    )
	  }
	}

	export default QAContainer;

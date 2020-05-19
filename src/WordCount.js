import React, { Component } from 'react'

class WordCount extends Component {
    constructor(props){
        super(props)
        this.state = {
            word: ""
        }

    }
    handleChange = (e) => {
        this.setState({word: e.target.value})

    }
    handleSubmit =(e)=>{
        e.preventDefault()
        this.setState((prevState) => ({
            word: prevState.word.split("").length

        }))
        
        
    }

            
        

        


    
    render() {
        return (
            <div className="container">
                <div className="row">
                
                    <form onSubmit={this.handleSubmit } className="form">
                        <label htmlFor="word"><b>WORD</b></label>
                        <input 
                        type="text" 
                        name="word" 
                        value={this.state.word} 
                        onChange={this.handleChange}/>
                        <button className="btn btn-success"> Count </button>
                    </form>
                    
                </div>
                <h2 className="number">{this.state.word}</h2>
          </div>
        )
    }
}

export default WordCount

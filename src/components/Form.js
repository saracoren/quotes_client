import React from 'react'

class Form extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        prase:'',
        author:''
      }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    }
    componentWillMount (){
      if (this.props.quote) {
        this.setState({
          phrase: this.props.quote.phrase || '',
          author: this.props.quote.author || '',
          id: this.props.quote.id || ''
        })
      }
    }
    handleChange (event) {
      this.setState({[event.target.id] : event.target.value})
    }
    handleSubmit (event){
      event.preventDefault()
      this.props.handleSubmit(
        event,
        {
          phrase: this.state.phrase,
          author: this.state.author,
          id:this.state.id
        }
      )
      this.setState ({
        phrase: '',
        author: ''
      })
      if(this.props.quote) {
        this.props.toggleForm()
      } 
    }
    render () {
      return (
        <form onSubmit={this.handleSubmit}>
        <div>
        {this.props.quote ? <h4>Edit this Quote:</h4> : <h4>Add a New Quote:</h4>}
        </div>
        <label htmlFor= "phrase"></label>
        <input type="text" id="phrase" name="phrase" onChange={this.handleChange} value={this.state.phrase} placeholder="Quote"/>
        <label htmlFor= "author"></label>
        <input type="text" id="author" name="author" onChange={this.handleChange} value={this.state.author} placeholder="Author"/> 
        <input type='submit' value={this.props.quote ? "update this quote" : "add a quote"}/>
        </form>
      )
    }
  }
  
  export default Form
  
import React from 'react';
import Header from './components/Header.js';
import Form from './components/Form.js';
import Quotes from './components/Quotes.js';
import './App.css';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			quotes: []
    }
    this.getQuotes = this.getQuotes.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
	}
	componentDidMount() {
		this.getQuotes()
	}
	getQuotes () {
		fetch('https://quotes-api.herokuapp.com/quotes')
			.then(response => response.json())
			.then(json => this.setState({quotes: json}))
      .catch(error => console.error(error))
  }
  handleAdd (event, formInputs) {
    // event.preventDefault()
    fetch('https://quotes-api.herokuapp.com/quotes', {
      body: JSON.stringify(formInputs),
      method: 'POST',
   headers: {
     'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'
   }
  })
   .then(createdQuote => {
     return createdQuote.json()
   })
   .then(jsonedQuote => {
     // reset the form
     // add quote to quotes
     this.setState({
       quotes: [jsonedQuote, ...this.state.quotes]
     })
   })
   .catch(error => console.log(error))
  }
  handleDelete (deletedQuote) {
    fetch(`https://quotes-api.herokuapp.com/quotes/${deletedQuote.id}`, {
       method: 'DELETE',
       headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
       }
     })
   .then(json => {
     this.setState(state => {
       const quotes = state.quotes.filter((quote, index) => quote.id !== deletedQuote.id)
       return {
         quotes
       }
     })
   })
   .catch(error => console.log(error))
  }
  handleUpdate (event, formInputs) {
    event.preventDefault()
    console.log('testing')
    fetch(`https://quotes-api.herokuapp.com/quotes/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: 'PUT',
   headers: {
     'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'
   }
  })
   .then(updatedQuote => {
     this.getQuotes()
   })
   .catch(error => console.log(error))
  }
  render () {
    return (
      <div className = "container">
        <Header />
        <Form 
        handleSubmit={this.handleAdd} 
        />
        <Quotes quotes ={this.state.quotes} 
        handleDelete={this.handleDelete}
        handleUpdate={this.handleUpdate}/>
      </div>
    )
  }
}

export default App;

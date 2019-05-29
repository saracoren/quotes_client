import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			quotes: []
    }
	}
	componentDidMount() {
		this.getQuotes()
	}
	getQuotes () {
		fetch('http://localhost:3000/quotes')
			.then(response => response.json())
			.then(json => this.setState({quotes: json}))
      .catch(error => console.error(error))
	}
  render () {
    return (
      <div className = "container">
        <h1> Notable Quotables</h1>
    {this.state.quotes.map ( quote => {
      return (
        <div className='quotes' key={quote.id}>
          <h3>Quote: {quote.phrase}</h3>
          <h3>Author: {quote.author}</h3>
        </div>
      )
    })}
      </div>
    )
  }
}

export default App;

import React from 'react'
import Form from './Form.js'


class Quote extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          formVisible: false
        }
        this.toggleForm = this.toggleForm.bind(this)
    }
    toggleForm () {
        this.setState({formVisible: !this.state.formVisible})
      }
    render () {
    const {quote, handleDelete, handleUpdate} = this.props
    return(
      <>
       {this.state.formVisible
        ? <Form quote={quote} handleSubmit={handleUpdate}
        toggleForm={this.toggleForm}>
        </Form>
        : <div className="quote">
         <h3>{ quote.phrase }</h3>
         <h3>{ quote.author }</h3>
         <button onClick={this.toggleForm}>Edit</button>
         <button onClick={()=> handleDelete(quote)}>X</button>
       </div>}
       </>
     )
  }
}

export default Quote

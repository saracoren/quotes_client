import React from 'react'



class Quote extends React.Component {

  render () {
    const {quote, handleDelete} = this.props
    return(
      <>
        <div className="notice">
         <h3>{ quote.phrase }</h3>
         <h3>{ quote.author }</h3>
         <button onClick={()=> handleDelete(quote)}>X</button>
       </div>
       </>
     )
  }
}

export default Quote

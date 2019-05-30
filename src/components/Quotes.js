import React from 'react'
import Quote from './Quote.js'

function Quotes(props) {
  const { quotes, handleDelete, handleUpdate } = props
//   const cheese = props.cheese
return (
<div>
  {quotes.map ( quote => {
      return (
        <Quote key={quote.id} quote={quote}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        />
      )
    })}
</div>
)
    // return (
    //   <div>
    //     {quotes.map((quote) => {
    //     return (
    //     <Quote key={quote.id} quote={quote}/>
    //     )
    // })}
    //   </div>
    // )
}

export default Quotes

    
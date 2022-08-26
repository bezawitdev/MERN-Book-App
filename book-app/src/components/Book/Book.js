import React from 'react'

function Book(props) {
    const {_id, name, author, description, price,image} = props.book;
  return (
    <div>
       <div className="bg-white"> 
        <div className="p-10">
        <img src={image} alt={name} />
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>$ {price}</h2>
        <button>Update</button>
        <button>Delete</button>
        </div>
        </div>

    </div>
  )
}

export default Book
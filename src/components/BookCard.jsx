import React from 'react'

export default function BookCard({book}) {
  return (
    <div className='book-card' type={book.type}>
        <img src={book.img} alt={book.title} />
        <h3>{book.title}</h3>
        <p>by {book.author}</p>
        <p>{book.price} eur</p>
    </div>
  )
}

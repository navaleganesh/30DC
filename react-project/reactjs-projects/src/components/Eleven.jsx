import React from 'react'

const Eleven = () => {
  
    const quotes = ["Hello ganesh", "Hello Ram", "Hello Sita","Hello Laxman", "Hello Hanumanji", "Hello Radha","Hello Krishna","Hello Mahadev"]


  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  return (
    <div>
        {quote}
    </div>
  )
}

export default Eleven
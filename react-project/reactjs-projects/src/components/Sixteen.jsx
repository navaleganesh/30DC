import React, { useState } from 'react'

const Sixteen = ({items, itemsPerPage}) => {

const [currentPage, setCurrentPage] = useState(1);

const indexOfLastItem = currentPage*itemsPerPage; // 1 * 2 = 2

const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 2 - 2 = 0

const currentItems = items.slice(indexOfFirstItem, indexOfLastItem) // 0, 2

const pageNumbers = [];

console.log("Items.length & itemsPerPage",items.length , itemsPerPage); // 6 2

console.log("Math",Math.ceil(items.length / itemsPerPage)); // 3

for(let i=1; i<=Math.ceil(items.length / itemsPerPage); i++){ // i=0; i<=3; i++
    pageNumbers.push(i)
}



  return (
    <div>
        <ul>
            {
                currentItems.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
        {pageNumbers.map((number)=>(
            <li key={number} onClick={()=>setCurrentPage(number)}>
                {number}
            </li>
        ))}
    </div>
  )
}

export default Sixteen
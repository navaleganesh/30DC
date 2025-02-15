import React, { useEffect,useState } from 'react'

const Six = () => {

    const [fetchdata, setFetchData] = useState([]);
    const [dataerror, setDataError] = useState('');

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setFetchData(data))
            .catch(error => setDataError(error))
    }, [])

    if(dataerror){
        return <h1>{dataerror.message}</h1>
    }
    return (
        <div>
            {
                fetchdata ? <ul>
                {
                    fetchdata.map((item)=>{
                       return <li key={item.id}>{item.title}</li>
                    })
                }   
            </ul> : <div>Loading...</div>
            }
        </div>
    )
}

export default Six
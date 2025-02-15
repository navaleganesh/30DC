import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import '../styles/card.css'


const Card = () => {
    // const {title,author,price, img} = items;

    // return (
    //     <div className='cards'>
    //         <div className="image_box">
    //             <img src={img} alt="image" />
    //         </div>
    //         <div className="details">
    //             <p>{title}</p>
    //             <p>{author}</p>
    //             <p>Price- {price} Rs.</p>
    //             <button onClick={() => handleClick(items)}>Add to Cart</button>
    //         </div>
    //     </div>
    // )

   const { list, cart, setCart,  setWarning} = useContext(UserContext)
    const handleClick = (item) => {

        // let isPresent = false;

        // list.forEach((product) => {
        //     if (item.id === product.id) {
        //         isPresent = true;
        //     }
        // })
        // if (isPresent) {

        //     setWarning(true);
        //     setTimeout(() => {
        //         setWarning(false)
        //     }, 2000);
        //     return   
        // }

        let isPresent = false;


        cart.forEach((product) => {
            if (item.id === product.id) {
                isPresent = true
            } 
        });

        if(isPresent){
            setWarning(true)
            setTimeout(() => {
                setWarning(false)
            }, 2000);
            return
        }
     
        setCart([...cart, item])
    }
    return (

        list.map((item) => (
    
            <div key={item.id}>
                <div className='cards'>
                    <div className="image_box">
                        <img src={item.img} alt="image" />
                    </div>
                    <div className="details">
                        <p>{item.title}</p>
                        <p>{item.author}</p>
                        <p>Price- {item.price} Rs.</p>
                        <button onClick={() => handleClick(item)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        ))


    )

}

export default Card
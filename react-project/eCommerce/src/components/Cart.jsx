import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


// function Cart({ cart, setCart, size }) {

//     const [amount, setAmount] = useState(0)
//     const [count, setCount] = useState(1)
 


//     const handlePlus = (i) => {
       
//         console.log(i);
 
//       cart.forEach((item)=> item.id === i.id ? setCount((count) => count + 1) : count)
//     }

//     const handleMinus = (j) => {
 
//         setCount(count => count - 1)
//         console.log("Sub Index", j  );
//     }

 

//     return (
//         <div>
//             {
//                 cart?.map((item, index) => (
//                     <div className='cart_box' key={item.id}>
//                         <div className="cart_img">
//                             <img src={item.img} alt="" />
//                             <p>{item.title}</p>
//                         </div>
//                         <div>
//                             <button onClick={()=> handlePlus(item)}>+</button>
//                             <span >{count }</span>
//                             <button onClick={()=> handleMinus(item)}>-</button>
                            
                            

                            
//                             <button onClick={() => handleRemove(item.id)}>Remove</button>
//                         </div>
//                         <div>
//                             <span>  Price - {item.price} Rs. </span>
//                         </div>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }


function Cart() {


    const { cart, setCart,list, setList } = useContext(UserContext)
 
    console.log(cart);
    console.log(list);
    
    
  const handleRemove = (id) => {
      setCart(cart.filter((item) =>  item.id !== id ))
    }
    return (
        <div>
            {
                cart?.map((item, index) => (
                    <div className='cart_box' key={index}>
                        <div className="cart_img">
                            <img src={item.img} alt="" />
                            <p>{item.title}</p>
                        </div>
                        <div>
                            <button>+</button>
                            <span >{item.count}</span>
                            <button>-</button>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                        <div>
                            <span>  Price - {item.price} Rs. </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Cart
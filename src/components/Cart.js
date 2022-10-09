import React from 'react'
import { useCart } from 'react-use-cart';
import 'boxicons'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Cart() {
    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart()
    // console.log(items)

    if (isEmpty) return <h3 className='cartmsg'>Hey it feels so light! Your Cart is empty, Lets add some items in cart</h3>;
        return (
            <>  
                <section className="py-4 container">
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <h2>Cart ({totalUniqueItems}) Total Items : ({totalItems})</h2>
                            <table className='table table-light table-hover m-0'>
                                <tbody>
                                <tr>
                                    <th>Product name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                                    {items.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{item.productName}</td>
                                                <td>Rs : {item.price}/-</td>
                                                <td>
                                                    <button 
                                                        className='btn btn-primary btn-sm ms-2 psm'
                                                        onClick={()=> updateItemQuantity(item.id,item.quantity-1)}
                                                    ><box-icon name='minus' type='solid' ></box-icon></button> <span className='margin'>{item.quantity}</span>
                                                    
                                                    <button 
                                                        className='btn btn-primary ms-2 btn-sm psm'
                                                        onClick={()=> updateItemQuantity(item.id,item.quantity+1)}
                                                    ><box-icon name='plus-medical'></box-icon></button>
                                                </td>
                                                <td>
                                                    <button 
                                                        className='btn btn-danger ms-2 btn-sm'
                                                        onClick={()=> removeItem(item.id)}
                                                    >Remove Item
                                                    </button>

                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table><br></br>
                            <div className='col-auto  mr-auto' style={{float:'right'}}>
                                    <h2>Total Price : {cartTotal}</h2>
                            
                                    <button 
                                    className="btn btn-danger m-2"
                                    onClick={()=>{emptyCart()}}
                                    > Clear Cart</button>
                                
                                    <button 
                                        className="btn btn-primary m-2" onClick={async()=>{
                                        await  axios.post("https://rheabts8ik.execute-api.ap-south-1.amazonaws.com/production/",{
                                        Items:JSON.stringify(items),
                                        GrandTotal:cartTotal
                                            })
                                            }
                                            }>
                                            Pay now
                                    </button>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </>
  );
}

// module.exports=totalItems;